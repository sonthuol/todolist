import {
  Add,
  Edit2,
  Element4,
  Logout,
  Notification,
  SearchNormal,
} from 'iconsax-react-native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  AvatarGroupComponent,
  CardComponent,
  CardImageComponent,
  CircularComponent,
  ContainerComponent,
  ProgressBarComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TagComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}: any) => {
  const user = auth().currentUser;

  return (
    <View style={{flex: 1}}>
      <ContainerComponent isScroll>
        <SectionComponent>
          <RowComponent justify="space-between">
            <Element4 size={24} color={colors.desc} />
            <Notification size={24} color={colors.desc} />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <View style={{flex: 1}}>
              <TextComponent text={`Hi, ${user?.email}`} />
              <TitleComponent text="Be Productive today" />
            </View>
            <TouchableOpacity onPress={() => auth().signOut()}>
              <Logout size={22} color={colors.white} />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <RowComponent
            styles={[globalStyles.inputContainer]}
            onPress={() => navigation.navigate('SearchScreen')}>
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
                <CircularComponent value={80} />
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
        <SectionComponent>
          <TitleComponent text="Urgent tasks" />
          <SpaceComponent height={16} />
          <CardComponent>
            <RowComponent>
              <CircularComponent value={40} radius={36} />
              <View style={{flex: 1, justifyContent: 'center', padding: 12}}>
                <TextComponent text="Title of task" />
              </View>
            </RowComponent>
          </CardComponent>
        </SectionComponent>
      </ContainerComponent>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('AddNewTask')}
          style={[
            globalStyles.row,
            {
              backgroundColor: colors.blue,
              padding: 16,
              width: '80%',
              borderRadius: 100,
            },
          ]}>
          <TextComponent text="Add new task" flex={0} />
          <Add size={22} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
