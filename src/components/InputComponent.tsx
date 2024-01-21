import React, {ReactNode} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RowComponent, TextComponent} from '.';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  title?: string;
  placeholder?: string;
  value: string;
  prefix?: ReactNode;
  affix?: ReactNode;
  allowClear?: boolean;
  multiple?: boolean;
  numberOfLine?: number;
  onChange: (val: string) => void;
}

const InputComponent = (props: Props) => {
  const {
    title,
    placeholder,
    value,
    prefix,
    affix,
    allowClear,
    multiple,
    numberOfLine,
    onChange,
  } = props;

  return (
    <View style={{marginBottom: 20}}>
      {title && <TextComponent text={title} flex={0} />}
      <RowComponent
        styles={[
          globalStyles.inputContainer,
          {
            marginTop: title ? 8 : 0,
            minHeight: multiple && numberOfLine ? 32 * numberOfLine : 32,
            paddingVertical: 14,
            paddingHorizontal: 10,
            alignItems: 'flex-start',
          },
        ]}>
        {prefix && prefix}
        <View style={{flex: 1}}>
          <TextInput
            style={[
              globalStyles.text,
              {
                margin: 0,
                padding: 0,
                paddingLeft: prefix ? 8 : 0,
                paddingRight: affix ? 8 : 0,
              },
            ]}
            value={value}
            placeholder={placeholder ?? ''}
            placeholderTextColor="#676767"
            multiline={multiple}
            numberOfLines={numberOfLine}
            onChangeText={val => onChange(val)}
          />
        </View>
        {affix && affix}
        {allowClear && value.length > 0 && (
          <TouchableOpacity onPress={() => onChange('')}>
            <AntDesign name="close" color={colors.white} size={22} />
          </TouchableOpacity>
        )}
      </RowComponent>
    </View>
  );
};

export default InputComponent;
