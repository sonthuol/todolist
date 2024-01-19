import {
  Edit2,
  Element4,
  Notification,
  SearchNormal,
} from 'iconsax-react-native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  AvatarGroupComponent,
  CardComponent,
  CardImageComponent,
  CircularConponent,
  ContainerComponent,
  ProgressBarComponent,
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
          <TextComponent color={colors.gray2} text="Search task" />
          <SearchNormal size={20} color={colors.desc} />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <CardComponent>
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
              <CircularConponent value={80} />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
      <SectionComponent>
        <RowComponent styles={{alignItems: 'flex-start'}}>
          <View style={{flex: 1}}>
            <CardImageComponent>
              <TouchableOpacity
                onPress={() => {}}
                style={[globalStyles.iconContainer]}>
                <Edit2 size={22} color={colors.white} />
              </TouchableOpacity>
              <TitleComponent text={'UX Design'} />
              <TextComponent text={'Task management mobile app'} size={13} />
              <View style={{marginVertical: 20}}>
                <AvatarGroupComponent />
                <ProgressBarComponent
                  size="large"
                  percent="70%"
                  color="#0AACFF"
                />
              </View>
              <TextComponent text="Tue, 2023 Match 03" size={12} />
            </CardImageComponent>
          </View>
          <SpaceComponent width={16} />
          <View style={{flex: 1}}>
            <CardImageComponent color="rgba(33, 150, 243, 0.9)">
              <TouchableOpacity
                onPress={() => {}}
                style={[globalStyles.iconContainer]}>
                <Edit2 size={22} color={colors.white} />
              </TouchableOpacity>
              <TitleComponent text={'API Payment'} />
              <View style={{marginVertical: 20}}>
                <AvatarGroupComponent />
                <ProgressBarComponent
                  size="large"
                  percent="70%"
                  color="#A2F068"
                />
              </View>
            </CardImageComponent>
            <SpaceComponent height={16} />
            <CardImageComponent color="rgba(18, 181, 22, 0.9)">
              <TouchableOpacity
                onPress={() => {}}
                style={[globalStyles.iconContainer]}>
                <Edit2 size={22} color={colors.white} />
              </TouchableOpacity>
              <TitleComponent text={'Update work'} />
              <TextComponent text={'Revission home page'} size={13} />
            </CardImageComponent>
          </View>
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default HomeScreen;
