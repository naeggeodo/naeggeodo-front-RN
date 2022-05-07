import React from 'react';
import MainTemplate from '../components/main/MainTemplate';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainPage = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <MainTemplate />
    </SafeAreaView>
  );
};

export default MainPage;
