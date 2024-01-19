import {View, Text, DimensionValue} from 'react-native';
import React from 'react';
import {RowComponent, TextComponent} from '.';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  percent: DimensionValue;
  size?: 'default' | 'small' | 'large';
  color?: string;
}

const ProgressBarComponent = (props: Props) => {
  const {percent, size, color} = props;

  const heightContent = size === 'small' ? 6 : size === 'large' ? 10 : 8;

  return (
    <View style={{marginTop: 12, marginBottom: 16}}>
      <View
        style={{
          height: heightContent,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          borderRadius: 100,
        }}>
        <View
          style={{
            height: heightContent,
            width: percent,
            backgroundColor: color ?? colors.blue,
            borderRadius: 100,
          }}></View>
      </View>
      <RowComponent styles={{justifyContent: 'space-between', marginTop: 4}}>
        <TextComponent text="Progress:" size={12} />
        <TextComponent
          text={`${percent}`}
          size={12}
          flex={0}
          font={fontFamilies.bold}
        />
      </RowComponent>
    </View>
  );
};

export default ProgressBarComponent;
