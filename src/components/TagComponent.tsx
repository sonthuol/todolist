import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {TextComponent} from '.';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';

interface Props {
  text: string;
  color?: string;
  tagStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const TagComponent = (props: Props) => {
  const {text, color, tagStyles, textStyles, onPress} = props;

  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress && onPress}
      style={[
        globalStyles.tag,
        tagStyles,
        {backgroundColor: color ?? colors.blue},
      ]}>
      <TextComponent text={text} styles={textStyles} />
    </TouchableOpacity>
  );
};

export default TagComponent;
