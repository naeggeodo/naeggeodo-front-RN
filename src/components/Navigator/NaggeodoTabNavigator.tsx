import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeBlack from '../../assets/icons/homeblack.svg';
import HomeGray from '../../assets/icons/homegray.svg';
import SearchGray from '../../assets/icons/searchgray.svg';
import SearchBlack from '../../assets/icons/searchblack.svg';
import PlusGray from '../../assets/icons/plusgray.svg';
import PlusBlack from '../../assets/icons/plusblack.svg';
import ChatGray from '../../assets/icons/chatgray.svg';
import ChatBlack from '../../assets/icons/chatblack.svg';
import MoreGray from '../../assets/icons/moregray.svg';
import MoreBlack from '../../assets/icons/moreblack.svg';
import MainStack from '../../pages/MainStack';
import MorePage from '../../pages/MorePage';
import SearchPage from '../../pages/SearchPage';
import fonts from '../../styles/fonts';
import palette from '../../styles/palette';
import NaeggeotalkPage from '../../pages/NaeggeotalkPage';
import OrderStack from '../../pages/OrderStack';

const Tab = createBottomTabNavigator();

const NaggeodoTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderColor: `${palette.LineGray}`,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            position: 'absolute',
            overflow: 'hidden',
            left: 0,
            bottom: 0,
            right: 0,
            paddingBottom: 25,
            paddingTop: 10,
            height: 83,
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
          component={MainStack}
          options={({route}) => {
            return {
              title: '홈',
              tabBarIcon: ({focused}) =>
                focused ? <HomeBlack /> : <HomeGray />,
            };
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
          component={OrderStack}
          options={{
            title: '내꺼톡 생성',
            tabBarIcon: ({focused}) => (focused ? <PlusBlack /> : <PlusGray />),
          }}
        />
        <Tab.Screen
          name="Naeggeotalk"
          component={NaeggeotalkPage}
          options={{
            title: '내꺼톡',
            tabBarIcon: ({focused}) => (focused ? <ChatBlack /> : <ChatGray />),
          }}
        />
        <Tab.Screen
          name="More"
          component={MorePage}
          options={{
            title: '더보기',
            tabBarIcon: ({focused}) => (focused ? <MoreBlack /> : <MoreGray />),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default NaggeodoTabNavigator;
