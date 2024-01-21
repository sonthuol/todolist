import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
  TitleComponent,
} from '../../components';
import {fontFamilies} from '../../constants/fontFamilies';
import {Lock, Sms} from 'iconsax-react-native';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import auth from '@react-native-firebase/auth';

const initUser = {
  email: '',
  password: '',
};

const SignInScreen = ({navigation}: any) => {
  const [user, setUser] = useState(initUser);
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    if (user.email || user.password) {
      setErrorText('');
    }
  }, [user.email, user.password]);

  const handleChangeValue = (key: string, value: string) => {
    const item: any = {...user};
    item[`${key}`] = value;
    setUser(item);
  };

  const handleSignInWithEmail = async () => {
    if (!user.email || !user.password) {
      setErrorText('Please enter your email and password!');
    } else {
      setErrorText('');
      setIsLoading(true);
      auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(userCredential => {
          const user = userCredential.user;
          console.log(user);
          setIsLoading(false);
        })
        .catch((error: any) => {
          setIsLoading(false);
          setErrorText(error.message);
        });
    }
  };

  return (
    <ContainerComponent>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <TitleComponent
          text="Sign in"
          flex={0}
          font={fontFamilies.bold}
          size={40}
          styles={{textTransform: 'uppercase', textAlign: 'center', flex: 0}}
        />
        <View>
          <InputComponent
            value={user.email}
            onChange={val => handleChangeValue('email', val)}
            prefix={<Sms size={22} color={colors.desc} />}
            title="Email"
            placeholder="Enter email"
            allowClear
          />
          <InputComponent
            value={user.password}
            onChange={val => handleChangeValue('password', val)}
            prefix={<Lock size={22} color={colors.desc} />}
            title="Password"
            placeholder="Enter password"
            isPassword
          />
          {errorText && (
            <TextComponent text={errorText} flex={0} color={colors.coral} />
          )}
        </View>
        <SpaceComponent height={20} />
        <ButtonComponent
          text="Login"
          onPress={handleSignInWithEmail}
          isLoading={isLoading}
        />
        <SpaceComponent height={20} />
        <Text style={[globalStyles.text, {textAlign: 'center'}]}>
          You don't have an account?{' '}
          <Text
            style={{color: colors.coral}}
            onPress={() => navigation.navigate('SignUpScreen')}>
            Create an account
          </Text>
        </Text>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignInScreen;
