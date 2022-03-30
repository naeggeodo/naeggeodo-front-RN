import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';

const SocialLoginButton = () => {
  return (
    <Pressable style={styles.loginButton}>
      <Text style={styles.loginText}>카카오 계정으로 로그인</Text>
    </Pressable>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: `${palette.kakaoYellow}`,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  loginText: {
    fontSize: 17,
    fontWeight: '400',
  },
});
