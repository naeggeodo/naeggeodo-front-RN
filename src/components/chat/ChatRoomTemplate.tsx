import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatRoomInfo from './ChatRoomInfo';
import {SafeAreaView} from 'react-native-safe-area-context';
import palette from '../../styles/palette';

const ChatRoomTemplate = () => {
  return (
    <SafeAreaView style={{backgroundColor: `${palette.black}`}}>
      <StatusBar barStyle="light-content" />
      <View style={styles.template}>
        <ChatRoomInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  template: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default ChatRoomTemplate;
