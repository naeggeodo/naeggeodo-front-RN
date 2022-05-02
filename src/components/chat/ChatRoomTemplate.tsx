import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyChatItem from './MyChatItem';

const ChatRoomTemplate = () => {
  return (
    <View style={styles.template}>
      <MyChatItem />
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
