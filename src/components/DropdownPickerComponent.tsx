import {View, Text, Modal, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SelectModel} from '../models/SelectModel';
import {
  ButtonComponent,
  InputComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '.';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';
import {ArrowDown2, SearchNormal, TickCircle} from 'iconsax-react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props {
  title?: string;
  items: SelectModel[];
  selected?: string[];
  onSelect: (val: string[]) => void;
  mutiple?: boolean;
}

const DropdownPickerComponent = (props: Props) => {
  const {title, items, selected, onSelect, mutiple} = props;

  const [isVisible, setIsVisible] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [resultSearch, setResultSearch] = useState<SelectModel[]>([]);
  const [itemSelected, setItemSelected] = useState<string[]>([]);

  useEffect(() => {
    selected && setItemSelected(selected);
  }, [isVisible, selected]);

  useEffect(() => {
    if (!searchKey) {
      setResultSearch([]);
    } else {
      const data = items.filter(element =>
        element.label.toLowerCase().includes(searchKey.toLowerCase()),
      );
      setResultSearch(data);
    }
  }, [searchKey]);

  const handleSelectedUser = (id: string) => {
    if (mutiple) {
      const data = [...itemSelected];
      const index = data.findIndex(element => element === id);

      if (index !== -1) {
        data.splice(index, 1);
      } else {
        data.push(id);
      }
      setItemSelected(data);
    } else {
      setItemSelected([id]);
    }
  };

  const handleConfirmSelect = () => {
    onSelect(itemSelected);
    setItemSelected([]);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    setSearchKey(''), setResultSearch([]);
  };

  const handleRemoveItemSelected = (index: number) => {
    if (selected) {
      selected.splice(index, 1);
      onSelect(selected);
    }
  };

  const renderSelectedItem = (id: string, index: number) => {
    const item = items.find(element => element.value === id);

    return (
      item && (
        <RowComponent
          onPress={() => handleRemoveItemSelected(index)}
          styles={{
            marginRight: 4,
            padding: 4,
            paddingHorizontal: 8,
            paddingVertical: 4,
            margin: 4,
            borderRadius: 100,
            borderWidth: 0.5,
            borderColor: colors.gray2,
          }}>
          <TextComponent text={item?.label} flex={0} size={12} />
          <SpaceComponent width={4} />
          <AntDesign name="close" color={colors.desc} size={12} />
        </RowComponent>
      )
    );
  };

  return (
    <View style={{marginBottom: 16}}>
      {title && <TextComponent text={title} flex={0} />}
      <RowComponent
        onPress={() => setIsVisible(true)}
        styles={[
          globalStyles.inputContainer,
          {marginTop: title ? 8 : 0, paddingVertical: 16},
        ]}>
        <View style={{flex: 1, paddingRight: 12}}>
          {selected && selected.length > 0 ? (
            <RowComponent justify="flex-start" styles={{flexWrap: 'wrap'}}>
              {selected.map((id, index) => renderSelectedItem(id, index))}
            </RowComponent>
          ) : (
            <TextComponent text="Select" flex={0} color={colors.gray2} />
          )}
        </View>
        <ArrowDown2 size={22} color={colors.white} />
      </RowComponent>
      <Modal
        visible={isVisible}
        style={{flex: 1}}
        transparent
        animationType="slide"
        statusBarTranslucent>
        <View
          style={[
            globalStyles.container,
            {
              padding: 20,
              paddingTop: 60,
              paddingBottom: 60,
            },
          ]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}
            data={searchKey ? resultSearch : items}
            ListHeaderComponent={
              <RowComponent
                styles={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flex: 1, marginRight: 12}}>
                  <InputComponent
                    onChange={val => setSearchKey(val)}
                    value={searchKey}
                    placeholder="Search"
                    prefix={<SearchNormal size={22} color={colors.gray2} />}
                    allowClear
                  />
                </View>
                <TouchableOpacity onPress={handleCloseModal}>
                  <TextComponent
                    text="Cancle"
                    color={colors.coral}
                    flex={0}
                    styles={{paddingBottom: 20}}
                  />
                </TouchableOpacity>
              </RowComponent>
            }
            renderItem={({item}) => (
              <RowComponent
                key={item.value}
                styles={{paddingVertical: 14}}
                onPress={() => handleSelectedUser(item.value)}>
                <TextComponent
                  size={16}
                  text={item.label}
                  color={
                    itemSelected.includes(item.value)
                      ? colors.coral
                      : colors.text
                  }
                />
                {itemSelected.includes(item.value) && (
                  <TickCircle size={22} color={colors.coral} />
                )}
              </RowComponent>
            )}
          />
          <ButtonComponent text="Confirm" onPress={handleConfirmSelect} />
        </View>
      </Modal>
    </View>
  );
};

export default DropdownPickerComponent;
