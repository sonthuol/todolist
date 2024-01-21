import {View, Text, Image} from 'react-native';
import React, {useId} from 'react';
import {RowComponent, TextComponent} from '.';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

const AvatarGroupComponent = () => {
  const uidsLenght = 10;
  const imageUrl =
    'https://i.pinimg.com/564x/fe/27/e5/fe27e5fa9bc09ed9230b02a2f1511fb1.jpg';

  const imageStyle = {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.white,
  };

  return (
    <RowComponent styles={{justifyContent: 'flex-start'}}>
      {Array.from({length: uidsLenght}).map(
        (item, index) =>
          index < 3 && (
            <Image
              source={{uri: imageUrl}}
              key={`image${index}`}
              style={[imageStyle, {marginLeft: index > 0 ? -10 : 0}]}
            />
          ),
      )}

      {uidsLenght > 3 && (
        <View
          style={[
            imageStyle,
            {
              backgroundColor: colors.coral,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              marginLeft: -10,
            },
          ]}>
          <TextComponent
            flex={0}
            styles={{
              lineHeight: 19,
            }}
            font={fontFamilies.semiBold}
            text={`+${uidsLenght - 3 > 9 ? 9 : uidsLenght - 3}`}
          />
        </View>
      )}
    </RowComponent>
  );
};

export default AvatarGroupComponent;
