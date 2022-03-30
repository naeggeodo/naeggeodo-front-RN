import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';
import Naver from '../../assets/icons/naverlogo.svg';

const NaverLoginButton = () => {
  return (
    <Pressable style={styles.loginButton}>
      <Naver />
      <Text style={styles.loginText}>네이버 계정으로 로그인</Text>
    </Pressable>
  );
};

export default NaverLoginButton;

const styles = StyleSheet.create({
  loginButton: {
    width: 315,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    backgroundColor: `${palette.naverGreen}`,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: 10,
  },
});
