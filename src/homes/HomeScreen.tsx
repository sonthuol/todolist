import {Element4, Notification, SearchNormal} from 'iconsax-react-native';
import React from 'react';
import {View} from 'react-native';
import {
  CardContainer,
  ContainerComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TagComponent,
  TextComponent,
  TitleComponent,
} from '../components';
import {colors} from '../constants/colors';
import {globalStyles} from '../styles/globalStyles';

const HomeScreen = () => {
  return (
    <ContainerComponent>
      <SectionComponent>
        <RowComponent justify="space-between">
          <Element4 size={24} color={colors.desc} />
          <Notification size={24} color={colors.desc} />
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
          <TextComponent color="#696B6F" text="Search task" />
          <SearchNormal size={20} color={colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardContainer>
          <RowComponent>
            <View style={{flex: 1}}>
              <TitleComponent text="Task Progress" />
              <TextComponent text="30/40 task done" />
              <SpaceComponent height={12} />
              <RowComponent justify="flex-start">
                <TagComponent
                  text="March 22"
                  onPress={() => console.log('tag')}
                />
              </RowComponent>
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
