import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import KaKaoLoginButton from './KaKaoLoginButton';
import NaverLoginButton from './NaverLoginButton';
import AppleLoginButton from './AppleLoginButton';
import palette from '../../styles/palette';
import Prevbtn from '../../assets/icons/prevbtn.svg';
import fonts from '../../styles/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoginTemplate = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <View style={styles.container}>
        <View>
          <Pressable>
            <Prevbtn />
          </Pressable>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>로그인하여</Text>
            <Text style={styles.title}>내꺼도의 모든 서비스를</Text>
            <Text style={styles.title}>이용하세요.</Text>
          </View>
          <Text style={styles.subTitle}>우리동네 배달비 반값 플랫폼</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.loginTitle}>간편 로그인</Text>
          <KaKaoLoginButton />
          <NaverLoginButton />
          <AppleLoginButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginTemplate;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: '10%',
    justifyContent: 'space-between',
    ...Platform.select({
      android: {
        paddingVertical: '5%',
      },
    }),
  },
  titleContainer: {
    marginTop: 39,
  },
  title: {
    fontFamily: `${fonts.sqBold}`,
    fontSize: 26,
    color: `${palette.black}`,
    fontWeight: '700',
  },
  subTitle: {
    fontFamily: `${fonts.sqRegular}`,
    fontSize: 17,
    marginTop: 30,
    color: `${palette.black}`,
    fontWeight: '400',
  },
  buttonContainer: {
    position: 'relative',
    borderTopWidth: 0.3,
    borderTopColor: `${palette.DarkGray}`,
    paddingTop: 30,
    ...Platform.select({
      android: {
        paddingBottom: 34,
      },
    }),
  },
  loginTitle: {
    fontFamily: `${fonts.sqRegular}`,
    position: 'absolute',
    left: '36.5%',
    top: '-4%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    fontSize: 12,
    color: `${palette.DarkGray}`,
  },
});
