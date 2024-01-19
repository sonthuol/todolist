import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AddNewTask, HomeScreen, SearchScreen} from '../screens';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddNewTask" component={AddNewTask} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default Router;
