import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Route} from '@react-navigation/native';
import ChatRoomInfo from './ChatRoomInfo';
import {StackProps} from '../../pages/MainStack';
import {SafeAreaView} from 'react-native-safe-area-context';
import palette from '../../styles/palette';
import Plus from '../../assets/icons/plus.svg';
import Send from '../../assets/icons/send.svg';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import DismissKeyboardView from '../common/DissmissKeyboardView';
import MyChatItem from './MyChatItem';
import OtherChatItem from './OtherChatItem';

const ChatRoomTemplate = ({
  navigation,
  route,
  checkTab,
}: {
  navigation: any;
  route: Route<StackProps>;
  checkTab: (route: Route<StackProps>) => void;
}) => {
  useEffect(() => {
    checkTab(route);
  }, [navigation, route]);

  return (
    <SafeAreaView style={{backgroundColor: `${palette.black}`}}>
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  );
};

export default ChatRoomTemplate;
