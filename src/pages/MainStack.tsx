import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ChatRoomTemplate from '../components/chat/ChatRoomTemplate';
import MainScreen from '../components/main/MainScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="chat-list" component={MainScreen} />
      <Stack.Screen name="chatRoom" component={ChatRoomTemplate} />
    </Stack.Navigator>
  );
};

export default MainStack;
