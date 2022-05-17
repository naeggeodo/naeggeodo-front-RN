import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Thumbnail from '../../assets/icons/thumbnail.svg';
import palette from '../../styles/palette';

const OtherChatItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnailWrapper}>
        <Thumbnail />
      </View>

      <View style={styles.chatItem}>
        <Text style={styles.chatText}>안녕하세요! 주문메뉴 골라주세요.</Text>
      </View>

      <View style={styles.timeWrapper}>
        <Text style={styles.timeText}>오후 3:30</Text>
      </View>
    </View>
  );
};

export default OtherChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  thumbnailWrapper: {justifyContent: 'flex-end'},
  chatItem: {
    maxWidth: 220,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,

    marginHorizontal: 5,
    paddingHorizontal: 10,
    backgroundColor: `${palette.mainOrange}`,
    ...Platform.select({
      ios: {
        paddingVertical: 9,
      },
      android: {
        paddingVertical: 10,
      },
    }),
  },
  chatText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
  },
  timeWrapper: {
    justifyContent: 'flex-end',
  },
  timeText: {
    fontWeight: '400',
    fontSize: 12,
    color: `${palette.DarkGray}`,
  },
});
