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
      <View style={styles.template}>
        <ChatRoomInfo navigation={navigation} />

        <View style={styles.chattingContainer}>
          <View style={{alignItems: 'center'}}>
            <Pressable style={styles.storeInfoButton}>
              <Text>가게정보 보러가기</Text>
              <ArrowRight />
            </Pressable>
          </View>
        </View>

        <View style={styles.textInputContainer}>
          <Pressable style={styles.pressableStyle}>
            <Plus />
          </Pressable>
          <TextInput style={styles.textInputStyle} />
          <Pressable style={styles.pressableStyle}>
            <Send />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  template: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  chattingContainer: {
    flex: 1,
    backgroundColor: `${palette.bgGray}`,
  },
  storeInfoButton: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 56,
  },
  textInputStyle: {
    flex: 1,
    height: 34,
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
