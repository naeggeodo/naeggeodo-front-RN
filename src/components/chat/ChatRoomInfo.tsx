import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Burger from '../../assets/icons/burger.svg';
import ChevronLeft from '../../assets/icons/chevronleft.svg';

const ChatRoomInfo = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <ChevronLeft />
      </Pressable>
      <View style={styles.titleContainer}>
        <View style={styles.imageWrapper}>
          <Burger width={44} height={44} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>버거킹 백석 이마트점</Text>
          <Text style={styles.counter}>인원 2명 / 2명</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  imageWrapper: {
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
  },
  counter: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
  },
});

export default ChatRoomInfo;
