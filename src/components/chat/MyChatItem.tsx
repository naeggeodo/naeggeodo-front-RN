import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';

const MyChatItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timeWrapper}>
        <Text style={styles.time}>오후 3:30</Text>
      </View>
      <View style={styles.myChatItem}>
        <Text style={styles.myChatText}>갈릭불고기와퍼 세트 옵션: 콜라(L)</Text>
      </View>
    </View>
  );
};

export default MyChatItem;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  timeWrapper: {
    justifyContent: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: `${palette.DarkGray}`,
  },
  myChatItem: {
    width: 144,
    marginLeft: 4,
    backgroundColor: '#ffffff',

    paddingVertical: 6,
    paddingHorizontal: 10,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  myChatText: {
    fontSize: 15,
    color: `${palette.black}`,
  },
});
