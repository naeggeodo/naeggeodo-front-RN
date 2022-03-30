import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';
import KaKao_talk from '../../assets/icons/kakao_talk.svg';

const KaKaoLoginButton = () => {
  return (
    <Pressable style={styles.loginButton}>
      <KaKao_talk />
      <Text style={styles.loginText}>카카오 계정으로 로그인</Text>
    </Pressable>
  );
};

export default KaKaoLoginButton;

const styles = StyleSheet.create({
  loginButton: {
    width: 315,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    backgroundColor: `${palette.kakaoYellow}`,
  },
  loginText: {
    fontSize: 17,
    fontWeight: '400',
    marginLeft: 10,
  },
});
