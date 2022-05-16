import {Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import palette from '../../styles/palette';
import KaKao_talk from '../../assets/icons/kakao_talk.svg';
import fonts from '../../styles/fonts';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

const KaKaoLoginButton: React.FC = () => {
  const [result, setResult] = useState('');

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();
    console.log(token);

    setResult(JSON.stringify(token));
  };
  return (
    <Pressable onPress={signInWithKakao} style={styles.loginButton}>
      <KaKao_talk />
      <Text style={styles.loginText}>카카오 계정으로 로그인</Text>
    </Pressable>
  );
};

export default KaKaoLoginButton;

const styles = StyleSheet.create({
  loginButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '6%',
    borderRadius: 10,
    backgroundColor: `${palette.kakaoYellow}`,
  },
  loginText: {
    fontFamily: `${fonts.sqRegular}`,
    fontSize: 17,
    marginLeft: 10,
  },
});
