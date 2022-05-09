import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import ChatRoomTemplate from '../chat/ChatRoomTemplate';

const MainStack = createNativeStackNavigator();

const MainTemplate = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="chat-list" component={MainScreen} />
      <MainStack.Screen name="chatRoom" component={ChatRoomTemplate} />
    </MainStack.Navigator>
  );
};

export default MainTemplate;
