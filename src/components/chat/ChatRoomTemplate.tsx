import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {Fragment, useEffect} from 'react';
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
    <Fragment>
      <SafeAreaView style={{backgroundColor: `${palette.black}`, flex: 0}} />
      <ChatRoomInfo navigation={navigation} />
      <StatusBar barStyle="light-content" />
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
        <Pressable style={styles.storeInfoButton}>
          <Text>가게정보 보러가기</Text>
          <ArrowRight />
        </Pressable>
      </View>

      <SafeAreaView
        style={{
          backgroundColor: `${palette.bgGray}`,
          flex: 1,
        }}>
        <View style={{flex: 1, backgroundColor: `${palette.mainOrange}`}}>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
          <Text>hello</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  storeInfoButton: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  chattingHistory: {
    height: '80%',
    overflow: 'scroll',
    backgroundColor: `${palette.bgGray}`,

    paddingHorizontal: 16,
    paddingVertical: 17,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    paddingVertical: 8.5,
  },
  textInputStyle: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    backgroundColor: `${palette.bgGray}`,
    borderRadius: 10,
  },
  pressableStyle: {
    paddingHorizontal: 10.5,
    paddingVertical: 13.5,
  },
});

export default ChatRoomTemplate;
