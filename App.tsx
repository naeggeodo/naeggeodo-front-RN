// react import
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
// pages import
import ChatRoomPage from './src/pages/ChatRoomPage';
import LoginPage from './src/pages/LoginPage';
import MainPage from './src/pages/MainPage';
import MorePage from './src/pages/MorePage';
import OrderPage from './src/pages/OrderPage';
import SearchPage from './src/pages/SearchPage';
// icons import
import HomeBlack from './src/assets/icons/homeblack.svg';
import HomeGray from './src/assets/icons/homegray.svg';
import SearchGray from './src/assets/icons/searchgray.svg';
import SearchBlack from './src/assets/icons/searchblack.svg';
import PlusGray from './src/assets/icons/plusgray.svg';
import PlusBlack from './src/assets/icons/plusblack.svg';
import ChatGray from './src/assets/icons/chatgray.svg';
import ChatBlack from './src/assets/icons/chatblack.svg';
import MoreGray from './src/assets/icons/moregray.svg';
import MoreBlack from './src/assets/icons/moreblack.svg';
import fonts from './src/styles/fonts';
import palette from './src/styles/palette';
import {Provider} from 'react-redux';
import store from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
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
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isLoggedIn ? (
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={{
                tabBarStyle: {
                  borderTopStartRadius: 20,
                  borderTopEndRadius: 20,
                  borderColor: `${palette.LineGray}`,
                  height: 83,
                  backgroundColor: 'white',
                },
                headerShown: false,
                tabBarActiveTintColor: `${palette.black}`,
                tabBarInactiveTintColor: `${palette.LineGray}`,
                tabBarLabelStyle: {
                  fontFamily: `${fonts.sqRegular}`,
                  fontSize: 11,
                },
              }}>
              <Tab.Screen
                name="Home"
                component={MainPage}
                options={{
                  title: '홈',
                  tabBarIcon: ({focused}) =>
                    focused ? <HomeBlack /> : <HomeGray />,
                }}
              />
              <Tab.Screen
                name="Search"
                component={SearchPage}
                options={{
                  title: '검색',
                  tabBarIcon: ({focused}) =>
                    focused ? <SearchBlack /> : <SearchGray />,
                }}
              />
              <Tab.Screen
                name="Orders"
                component={OrderPage}
                options={{
                  title: '내꺼도 생성',
                  tabBarIcon: ({focused}) =>
                    focused ? <PlusBlack /> : <PlusGray />,
                }}
              />
              <Tab.Screen
                name="Chattings"
                component={ChatRoomPage}
                options={{
                  title: '내꺼도',
                  tabBarIcon: ({focused}) =>
                    focused ? <ChatBlack /> : <ChatGray />,
                }}
              />
              <Tab.Screen
                name="More"
                component={MorePage}
                options={{
                  title: '전체',
                  tabBarIcon: ({focused}) =>
                    focused ? <MoreBlack /> : <MoreGray />,
                }}
              />
            </Tab.Navigator>
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
