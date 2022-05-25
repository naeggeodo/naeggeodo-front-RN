import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';
import Naver from '../../assets/icons/naverlogo.svg';
import fonts from '../../styles/fonts';

const NaverLoginButton = () => {
  return (
    <Pressable style={styles.loginButton}>
      <Naver />
      <Text style={styles.loginText}>네이버 계정으로 로그인</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '6%',
    borderRadius: 10,
    backgroundColor: `${palette.naverGreen}`,
    marginTop: 10,
  },
  loginText: {
    fontFamily: `${fonts.sqRegular}`,
    color: '#ffffff',
    fontSize: 17,
    marginLeft: 10,
  },
});

export default NaverLoginButton;
