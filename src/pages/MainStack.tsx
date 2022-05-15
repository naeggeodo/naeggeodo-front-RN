import {useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ChatRoomTemplate from '../components/chat/ChatRoomTemplate';
import MainScreen from '../components/main/MainScreen';

const Stack = createNativeStackNavigator();

const MainStack = ({navigation}: {navigation: any}) => {
  const hideTab = (check: 'chatroom' | 'mainscreen') => {
    if (check === 'mainscreen') {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    } else if (check === 'chatroom') {
      navigation.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    }
  };

  const showTab = () => {};

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="chat-list"
        children={({navigation, route}) => (
          <MainScreen
            navigation={navigation}
            route={route}
            showTab={showTab}
            hideTab={hideTab}
          />
        )}
      />
      <Stack.Screen
        name="chatRoom"
        children={({navigation, route}) => (
          <ChatRoomTemplate
            hideTab={hideTab}
            showTab={showTab}
            navigation={navigation}
            route={route}
          />
        )}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
