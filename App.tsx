import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import ChatRoomPage from './src/pages/ChatRoomPage';
import LoginPage from './src/pages/LoginPage';
import MainPage from './src/pages/MainPage';
import MorePage from './src/pages/MorePage';
import OrderPage from './src/pages/OrderPage';
import SearchPage from './src/pages/SearchPage';
import HomeBlack from './src/assets/icons/homeblack.svg';
import SearchGray from './src/assets/icons/searchgray.svg';
import PlusGray from './src/assets/icons/plusgray.svg';
import ChatGray from './src/assets/icons/chatgray.svg';
import MoreGray from './src/assets/icons/moregray.svg';
import fonts from './src/styles/fonts';

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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={MainPage}
            options={{
              title: '홈',
              tabBarIcon: ({color}) => <HomeBlack color={color} />,
              tabBarLabelStyle: {
                fontFamily: `${fonts.sqRegular}`,
                fontSize: 12,
              },
              tabBarStyle: {
                height: 83,
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchPage}
            options={{
              title: '검색',
              tabBarIcon: ({color, size}) => <SearchGray color={color} />,
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrderPage}
            options={{
              title: '내꺼도 생성',
              tabBarIcon: ({color, size}) => <PlusGray color={color} />,
            }}
          />
          <Tab.Screen
            name="Chattings"
            component={ChatRoomPage}
            options={{
              title: '내꺼도',
              tabBarIcon: ({color, size}) => <ChatGray color={color} />,
            }}
          />
          <Tab.Screen
            name="More"
            component={MorePage}
            options={{
              title: '전체',
              tabBarIcon: ({color, size}) => <MoreGray color={color} />,
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={LoginPage}
            options={{title: '로그인'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
