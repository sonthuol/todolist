import React from 'react';
import {TextComponent} from '.';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';
import {StyleProp, TextStyle} from 'react-native';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
  flex?: number;
  styles?: StyleProp<TextStyle>;
}

const TitleComponent = (props: Props) => {
  const {text, size, font, color, flex, styles} = props;

  return (
    <TextComponent
      text={text}
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      color={color ?? colors.text}
      flex={flex ?? 1}
      styles={styles}
    />
  );
};

export default TitleComponent;
