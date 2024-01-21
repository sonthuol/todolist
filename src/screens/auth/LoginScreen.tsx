import React, {useState} from 'react';
import {View} from 'react-native';
import {
  ContainerComponent,
  InputComponent,
  SectionComponent,
  TitleComponent,
} from '../../components';
import {fontFamilies} from '../../constants/fontFamilies';
import {Lock, Sms} from 'iconsax-react-native';
import {colors} from '../../constants/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleLoginWithEmail = async () => {};

  return (
    <ContainerComponent>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <TitleComponent
          text="Login"
          flex={0}
          font={fontFamilies.bold}
          size={40}
          styles={{textTransform: 'uppercase', textAlign: 'center', flex: 0}}
        />
        <View>
          <InputComponent
            value={email}
            onChange={val => setEmail(val)}
            prefix={<Sms size={22} color={colors.desc} />}
            title="Email"
            placeholder="Enter email"
            allowClear
          />
          <InputComponent
            value={password}
            onChange={val => setPassword(val)}
            prefix={<Lock size={22} color={colors.desc} />}
            title="Password"
            placeholder="Enter password"
            isPassword
          />
        </View>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
