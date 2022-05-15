import {Route} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ChatRoomTemplate from '../components/chat/ChatRoomTemplate';
import MainScreen from '../components/main/MainScreen';
import palette from '../styles/palette';

const Stack = createNativeStackNavigator();
export type StackProps = 'Home' | 'chatRoom' | 'chat-list';

const MainStack = ({
  navigation,
  route,
}: {
  navigation: any;
  route: Route<StackProps>;
}) => {
  const checkTab = (routes: Route<StackProps>) => {
    if (routes.name === 'Home') {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
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
      });
    } else if (routes.name === 'chatRoom') {
      navigation.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    }
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="chat-list"
        children={() => (
          <MainScreen
            navigation={navigation}
            route={route}
            checkTab={checkTab}
          />
        )}
      />
      <Stack.Screen
        name="chatRoom"
        children={({route}) => (
          <ChatRoomTemplate
            checkTab={checkTab}
            navigation={navigation}
            route={route}
          />
        )}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
