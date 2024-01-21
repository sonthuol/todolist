import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {AddNewTask, HomeScreen, LoginScreen, SearchScreen} from '../screens';

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      user ? setIsLogin(true) : setIsLogin(false);
    });
  }, []);

  const MainRouter = (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddNewTask" component={AddNewTask} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );

  const AuthRouter = (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );

  return isLogin ? MainRouter : AuthRouter;
};

export default Router;
