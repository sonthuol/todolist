import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  value: number;
  maxValue?: number;
  color?: string;
  radius?: number;
}

const CircularConponent = (props: Props) => {
  const {value, maxValue, color, radius} = props;

  return (
    <CircularProgress
      value={80}
      title={`${value}%`}
      radius={radius ?? 46}
      showProgressValue={false}
      activeStrokeColor={color ?? colors.blue}
      inActiveStrokeColor="#3C444A"
      titleColor={colors.text}
      titleFontSize={20}
      inActiveStrokeWidth={14}
      activeStrokeWidth={14}
      titleStyle={{
        fontFamily: fontFamilies.medium,
      }}
    />
  );
};

export default CircularConponent;
