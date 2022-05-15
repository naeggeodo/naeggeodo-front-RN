import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatRoomInfo from './ChatRoomInfo';
import {SafeAreaView} from 'react-native-safe-area-context';
import palette from '../../styles/palette';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import BottomDrawer from 'react-native-bottom-drawer';

const TAB_BAR_HEIGHT = 49;

const ChatRoomTemplate = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  console.log(route);
  return (
    <SafeAreaView style={{backgroundColor: `${palette.black}`}}>
      <StatusBar barStyle="light-content" />
      <View style={styles.template}>
        <ChatRoomInfo navigation={navigation} />

        <View style={styles.chattingContainer}>
          <View style={{alignItems: 'center'}}>
            <Pressable style={styles.storeInfoButton}>
              <Text>가게정보 보러가기</Text>
              <ArrowRight />
            </Pressable>
          </View>
        </View>
        <BottomDrawer
          shadow={false}
          containerHeight={206}
          offset={TAB_BAR_HEIGHT}>
          <Text>dddddd</Text>
        </BottomDrawer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  template: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  chattingContainer: {
    flex: 1,
    backgroundColor: `${palette.bgGray}`,
  },
  storeInfoButton: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default ChatRoomTemplate;
