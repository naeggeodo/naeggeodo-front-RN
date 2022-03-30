import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';
import AppleLogo from '../../assets/icons/apple.svg';

const SocialLoginButton = () => {
  return (
    <Pressable style={styles.loginButton}>
      <AppleLogo width={150} height={50} />
      <Text style={styles.loginText}>카카오 계정으로 로그인</Text>
    </Pressable>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: `${palette.kakaoYellow}`,
  },
  loginText: {
    fontSize: 17,
    fontWeight: '400',
  },
});
