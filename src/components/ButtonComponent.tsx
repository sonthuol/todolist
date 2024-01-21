import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {TextComponent} from '.';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  color?: string;
  isLoading?: boolean;
  onPress: () => void;
}

const ButtonComponent = (props: Props) => {
  const {text, color, isLoading, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: color ? color : isLoading ? colors.gray : colors.blue,
        padding: 14,
        borderRadius: 14,
      }}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <TextComponent
          text={text}
          flex={0}
          font={fontFamilies.bold}
          styles={{textTransform: 'uppercase', textAlign: 'center'}}
          size={16}
        />
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
