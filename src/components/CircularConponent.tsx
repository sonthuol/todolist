import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  value: number;
  maxValue?: number;
  color?: string;
}

const CircularConponent = (props: Props) => {
  const {value, maxValue, color} = props;

  return (
    <CircularProgress
      value={80}
      title={`${value}%`}
      showProgressValue={false}
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor="#3C444A"
      titleColor={colors.text}
      titleFontSize={32}
      titleStyle={{
        fontFamily: fontFamilies.medium,
      }}
    />
  );
};

export default CircularConponent;
