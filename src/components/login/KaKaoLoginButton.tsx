import {Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import palette from '../../styles/palette';
import fonts from '../../styles/fonts';
import KaKao_talk from '../../assets/icons/kakao_talk.svg';
import {
  KakaoOAuthToken,
  KakaoProfile,
  getProfile as getKakaoProfile,
  login,
} from '@react-native-seoul/kakao-login';

const KaKaoLoginButton = () => {
  const [result, setResult] = useState<string>('');

  const signInWithKakao = async (): Promise<void> => {
    console.log('loginstart');
    const token: KakaoOAuthToken = await login();

    console.log(token, 'loginend');

    setResult(JSON.stringify(token));
  };

  const getProfile = async (): Promise<void> => {
    const profile = await getKakaoProfile();
    console.log(profile);

    setResult(JSON.stringify(profile));
  };

  return (
    <Pressable style={styles.loginButton} onPress={signInWithKakao}>
      <KaKao_talk />
      <Text style={styles.loginText}>카카오 계정으로 로그인</Text>
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
    backgroundColor: `${palette.kakaoYellow}`,
  },
  loginText: {
    fontFamily: `${fonts.sqRegular}`,
    fontSize: 17,
    marginLeft: 10,
  },
});

export default KaKaoLoginButton;
