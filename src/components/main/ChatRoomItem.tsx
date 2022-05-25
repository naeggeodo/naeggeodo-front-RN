import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import palette from '../../styles/palette';
import fonts from '../../styles/fonts';
import Burger from '../../assets/icons/burger.svg';
import BlacKArrow from '../../assets/icons/blackArrowRight.svg';

import TimeCalculator from '../../utils/TimeCalculator';

const ChatRoomItem = ({
  id,
  title,
  maxCount,
  currentCount,
  createDate,
  navigation,
  route,
}: {
  id: number;
  title: string;
  maxCount: number;
  currentCount: number;
  createDate: string;
  navigation?: any;
  route?: any;
}) => {
  const timeCalculator = new TimeCalculator(createDate);

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableContainer}>
        <View style={styles.imgWrapper}>
          <Burger />
        </View>

        <View style={styles.textInfoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.peopleCount}>
            인원 {maxCount}명 / {currentCount}명
          </Text>

          <View style={styles.timeContainer}>
            <View style={styles.timeBadge}>
              <Text style={styles.timeText}>
                {timeCalculator.calculateCreateMinute()}
              </Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate('chatRoom', {id})}
              style={styles.orderTogetherContainer}>
              <Text style={styles.orderTogetherText}>함께 주문하기</Text>
              <BlacKArrow width={14} height={20} style={{marginLeft: 2}} />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: `${palette.LineGray}`,
  },
  pressableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgWrapper: {
    width: '20%',
  },
  textInfoContainer: {
    width: '77%',
  },
  title: {
    color: `${palette.black}`,
    fontSize: 15,
    fontFamily: `${fonts.sqRegular}`,
    marginTop: 5,
    lineHeight: 20,
  },
  peopleCount: {
    color: `${palette.DarkGray}`,
    lineHeight: 20,
    marginTop: 5,
    fontSize: 12,
    fontFamily: `${fonts.sqRegular}`,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  timeBadge: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${palette.LightGray}`,
  },
  timeText: {
    color: `${palette.DarkGray}`,
    fontFamily: `${fonts.sqRegular}`,
    fontSize: 12,
  },

  orderTogetherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderTogetherText: {
    color: `${palette.black}`,
    fontSize: 12,
    fontFamily: `${fonts.sqRegular}`,
    paddingBottom: 1,
  },
});
export default ChatRoomItem;
