import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';
import Apple from '../../assets/icons/apple.svg';

const AppleLoginButton = () => {
  return (
    <Pressable style={styles.loginButton}>
      <Apple />
      <Text style={styles.loginText}>애플 계정으로 로그인</Text>
    </Pressable>
  );
};

export default AppleLoginButton;

const styles = StyleSheet.create({
  loginButton: {
    width: 315,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    backgroundColor: `${palette.black}`,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '400',
    marginLeft: 10,
  },
});
