import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/homes/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
