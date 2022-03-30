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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '6%',
    borderRadius: 10,
    backgroundColor: `${palette.black}`,
    marginTop: 10,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '400',
  },
});
