import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ChatRoomInfo from './ChatRoomInfo';
import {SafeAreaView} from 'react-native-safe-area-context';
import palette from '../../styles/palette';
import ArrowRight from '../../assets/icons/arrow_right.svg';

const ChatRoomTemplate = ({
  navigation,
  route,
  hideTab,
  showTab,
}: {
  navigation: any;
  route: any;
  hideTab: (check: 'chatroom' | 'mainscreen') => void;
  showTab: () => void;
}) => {
  useEffect(() => {
    hideTab('chatroom');
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
});

export default ChatRoomTemplate;
