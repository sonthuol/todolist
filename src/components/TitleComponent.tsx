import React from 'react';
import {TextComponent} from '.';
import {fontFamilies} from '../constants/fontFamilies';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  size?: number;
  font?: string;
  color?: string;
}

const TitleComponent = (props: Props) => {
  const {text, size, font, color} = props;

  return (
    <TextComponent
      text={text}
      size={size ?? 20}
      font={font ?? fontFamilies.semiBold}
      color={color ?? colors.text}
    />
  );
};

export default TitleComponent;
