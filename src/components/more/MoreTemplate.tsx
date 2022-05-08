import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';

const MoreTemplate = () => {
  return (
    <View>
      <View style={styles.halfTopContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.normalText}>안녕하세요,</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>조재연</Text>
            <Text style={styles.normalText}>님</Text>
          </View>
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.orderSubContainer}>
            <Text style={styles.orderSubTitle}>최근 3개월간 주문</Text>
            <Text style={styles.orderCountText}>4건</Text>
          </View>
          <View>
            <Text style={styles.orderSubTitle}>참여중인 내꺼도</Text>
            <Text style={styles.orderCountText}>3건</Text>
          </View>
        </View>
      </View>
      <View style={styles.breakLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  halfTopContainer: {
    paddingHorizontal: 24,
  },
  TitleContainer: {marginTop: 30},
  nameContainer: {
    flexDirection: 'row',
  },
  normalText: {fontSize: 24, fontWeight: '400'},
  name: {
    fontWeight: '700',
    fontSize: 24,
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 16,
    height: 94,
    backgroundColor: `${palette.LightGray2}`,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 8,
  },
  orderSubContainer: {
    borderRightWidth: 2,
    borderColor: '#dddddd',
    paddingRight: 38,
  },
  orderSubTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#111111',
  },
  orderCountText: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 4,
    color: `${palette.mainOrange}`,
  },
  breakLine: {
    borderWidth: 3,
    borderColor: `${palette.LightGray2}`,
    marginTop: 20,
    marginBottom: 30,
  },
});

export default MoreTemplate;
