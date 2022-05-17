import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';

import File from '../../assets/icons/file.svg';
import ChatIcon from '../../assets/icons/chaticon.svg';
import Warning from '../../assets/icons/warning.svg';
import DocumentGray from '../../assets/icons/documentGray.svg';
import UserIcon from '../../assets/icons/userIcon.svg';

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

      <View style={styles.sectionContainer}>
        <Text style={styles.csTitle}>고객센터</Text>
        <Pressable style={styles.buttonStyle}>
          <File />
          <Text style={styles.buttonText}>공지사항</Text>
        </Pressable>
        <Pressable style={styles.buttonStyle}>
          <ChatIcon />
          <Text style={styles.buttonText}>건의사항</Text>
        </Pressable>
        <Pressable style={styles.buttonStyle}>
          <Warning />
          <Text style={styles.buttonText}>신고내역 확인</Text>
        </Pressable>
      </View>

      <View style={[styles.sectionContainer, {marginTop: 30}]}>
        <Text style={styles.csTitle}>이용약관</Text>
        <Pressable style={styles.buttonStyle}>
          <DocumentGray />
          <Text style={styles.buttonText}>이용약관</Text>
        </Pressable>
        <Pressable style={styles.buttonStyle}>
          <UserIcon />
          <Text style={styles.buttonText}>개인정보 처리방침</Text>
        </Pressable>
      </View>
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
    opacity: 0.5,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingVertical: 15,
    borderRadius: 5,
  },
  csTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: `${palette.textGray}`,
    marginBottom: 8,
    paddingLeft: 8,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 15,
    marginLeft: 14,
    color: '#000000',
  },
  sectionContainer: {
    paddingHorizontal: 16,
  },
});

export default MoreTemplate;
