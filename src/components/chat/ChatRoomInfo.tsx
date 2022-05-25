import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Burger from '../../assets/icons/burger.svg';
import ChevronLeft from '../../assets/icons/chevronleft.svg';
import BurgerBar from '../../assets/icons/burgerbar.svg';
import palette from '../../styles/palette';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';

const ChatRoomInfo = ({navigation}: {navigation: any}) => {
  const moveBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const chatRoomInfo = useSelector(
    (state: RootState) => state.chatRoom.chatRoomInfo,
  );

  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        <Pressable style={{padding: 10}} onPress={moveBack}>
          <ChevronLeft />
        </Pressable>
        <View style={styles.titleContainer}>
          <View style={styles.imageWrapper}>
            <Burger width={44} height={44} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title}>{chatRoomInfo?.title}</Text>
            <Text style={styles.counter}>
              인원 {chatRoomInfo?.currentCount}명 / {chatRoomInfo?.maxCount}명
            </Text>
          </View>
        </View>
      </View>

      <Pressable style={{padding: 10}}>
        <BurgerBar />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingBottom: 21,
    backgroundColor: `${palette.black}`,
    position: 'relative',
    zIndex: 10,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleContainer: {
    flexDirection: 'row',
  },
  imageWrapper: {
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
  },
  counter: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ffffff',
  },
  backgroundBlack: {
    backgroundColor: `${palette.black}`,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,

    position: 'absolute',
    height: '100%',
  },
});

export default ChatRoomInfo;
