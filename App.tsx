// react import
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
// pages import
import LoginPage from './src/pages/LoginPage';
import NaggeodoTabNavigator from './src/components/Navigator/NaggeodoTabNavigator';

import {Provider} from 'react-redux';
import store from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isLoggedIn ? (
            <NaggeodoTabNavigator />
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="SignIn"
                component={LoginPage}
                options={{
                  title: '로그인',
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
