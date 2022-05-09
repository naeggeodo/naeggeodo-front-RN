import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatRoomInfo from './ChatRoomInfo';

const ChatRoomTemplate = () => {
  return (
    <View style={styles.template}>
      <ChatRoomInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  template: {
    backgroundColor: 'black',
    opacity: 0.5,
    height: '100%',
  },
});

export default ChatRoomTemplate;
