import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SocialLoginButton from './src/components/login/SocialLoginButton';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello React!</Text>
      </View>
      <SocialLoginButton />
    </SafeAreaView>
  );
};

export default App;
