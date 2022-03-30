import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import AppleLoginButton from './src/components/login/AppleLoginButton';
import KaKaoLoginButton from './src/components/login/KaKaoLoginButton';
import NaverLoginButton from './src/components/login/NaverLoginButton';

const App = () => {
  return (
    <SafeAreaView>
      <KaKaoLoginButton />
      <NaverLoginButton />
      <AppleLoginButton />
    </SafeAreaView>
  );
};

export default App;
