import {View, Text} from 'react-native';
import React from 'react';
import {SelectModel} from '../models/SelectModel';
import {RowComponent, TextComponent} from '.';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';
import {ArrowDown2} from 'iconsax-react-native';

interface Props {
  title?: string;
  items: SelectModel[];
  selected?: string[];
  onSelect: (val: string[]) => void;
  mutiple?: boolean;
}

const DropdownPickerComponent = (props: Props) => {
  const {title, items, selected, onSelect, mutiple} = props;
  return (
    <View style={{marginBottom: 16}}>
      {title && <TextComponent text={title} flex={0} />}
      <RowComponent
        onPress={() => {}}
        styles={[
          globalStyles.inputContainer,
          {marginTop: title ? 8 : 0, paddingVertical: 16},
        ]}>
        <View style={{flex: 1, paddingRight: 12}}>
          <TextComponent text="Select" flex={0} color={colors.gray2} />
        </View>
        <ArrowDown2 size={22} color={colors.white} />
      </RowComponent>
    </View>
  );
};

export default DropdownPickerComponent;
