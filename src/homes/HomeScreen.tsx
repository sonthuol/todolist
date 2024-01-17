import React from 'react';
import {Text, View} from 'react-native';
import {
  CardContainer,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
  TitleComponent,
} from '../components';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';
import { Element4 } from 'iconsax-react-native';

const HomeScreen = () => {
  return (
    <ContainerComponent>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Element4 size={24} color={colors.desc} />
          <TextComponent text="Todo List" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Hi, Json" />
        <TitleComponent text="Be Productive today" />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('Say hi')}>
          <TextComponent text="Search" />
          <Text>S</Text>
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardContainer>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task Progress" />
              <TextComponent text="30/40 task done" />
              <TextComponent text="Tag" />
            </View>
            <View>
              <TextComponent text="Circle Char" />
            </View>
          </RowComponent>
        </CardContainer>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default HomeScreen;
