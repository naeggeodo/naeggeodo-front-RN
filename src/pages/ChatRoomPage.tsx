import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatRoomTemplate from '../components/chat/ChatRoomTemplate';
import {SafeAreaView} from 'react-native-safe-area-context';

const ChatRoomPage = () => {
  return (
    <SafeAreaView>
      <ChatRoomTemplate />
    </SafeAreaView>
  );
};

export default ChatRoomPage;

const styles = StyleSheet.create({});
