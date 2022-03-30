import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';
import Apple from '../../assets/icons/apple.svg';
import fonts from '../../styles/fonts';

const AppleLoginButton = () => {
  return (
    <Pressable style={styles.loginButton}>
      <Apple />
      <Text style={styles.loginText}>Apple 계정으로 로그인</Text>
    </Pressable>
  );
};

export default AppleLoginButton;

const styles = StyleSheet.create({
  loginButton: {
    position: 'relative',
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
    fontFamily: `${fonts.sqRegular}`,
    color: '#ffffff',
    fontSize: 17,
    marginLeft: 10,
  },
});
