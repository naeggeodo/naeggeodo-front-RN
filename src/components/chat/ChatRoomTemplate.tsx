import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyChatItem from './MyChatItem';
import OtherChatItem from './OtherChatItem';

const ChatRoomTemplate = () => {
  return (
    <View style={styles.template}>
      <MyChatItem />
      <OtherChatItem />
    </View>
  );
};

export default ChatRoomTemplate;

const styles = StyleSheet.create({
  template: {
    backgroundColor: 'pink',
    height: '100%',
  },
});
