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
import {ArrowDown2, SearchNormal} from 'iconsax-react-native';

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
          <TextComponent text="Select" flex={0} color={colors.gray2} />
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
                <TouchableOpacity onPress={() => setIsVisible(false)}>
                  <TextComponent
                    text="Cancle"
                    color="coral"
                    flex={0}
                    styles={{paddingBottom: 20}}
                  />
                </TouchableOpacity>
              </RowComponent>
            }
            renderItem={({item}) => (
              <RowComponent key={item.value} styles={{paddingVertical: 14}}>
                <TextComponent size={16} text={item.label} />
              </RowComponent>
            )}
          />
          <ButtonComponent text="Confirm" onPress={() => setIsVisible(false)} />
          <SpaceComponent height={10} />
          <ButtonComponent
            text="Cancle"
            color={colors.gray}
            onPress={() => setIsVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default DropdownPickerComponent;
