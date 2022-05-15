import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import axios, {AxiosResponse} from 'axios';

import palette from '../../styles/palette';
import Location from '../../assets/icons/location.svg';
import ArrowRight from '../../assets/icons/arrow_right.svg';

import SearchLocationWebViewTemplate from '../search-location-web-view/SearchLocationWebViewTemplate';
import {useDispatchSearchLocation} from '../../hooks/useDispatchSeachLocation';
import {useAppDispatch} from '../../store';
import categoriesSlice, {FoodCategoryResponse} from '../../slices/categories';
import chatRoomSlice, {ChatRoomResponse} from '../../slices/chatRoom';
import SlideCategory from './SlideCategory';
import ChatRoomItem from './ChatRoomItem';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainScreen = ({
  navigation,
  route,
  showTab,
  hideTab,
}: {
  navigation: any;
  route: any;
  showTab: () => void;
  hideTab: (check: 'chatroom' | 'mainscreen') => void;
}) => {
  const {webviewIsOpened, openWebview, handleLocation, closeWebview} =
    useDispatchSearchLocation();
  const dispatch = useAppDispatch();
  const chatRooms = useSelector((state: RootState) => state.chatRoom.chatRooms);

  useEffect(() => {
    hideTab('mainscreen');
  }, [route, navigation]);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<{categories: FoodCategoryResponse[]}> =
          await axios.get('http://3.38.33.232:9090/categories');
        dispatch(
          categoriesSlice.actions.getFoodCategories({
            foodCategories: response.data.categories,
          }),
        );
      } catch (err) {
        console.error('error #%d', err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<{['chat-room']: ChatRoomResponse[]}> =
          await axios.get(
            'http://3.38.33.232:9090/chat/rooms?buildingcode=서울',
          );
        dispatch(
          chatRoomSlice.actions.getChatRooms({
            chatRooms: response.data['chat-room'],
          }),
        );
      } catch (err) {
        console.error('error #%d', err);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <View style={styles.container}>
        {webviewIsOpened && (
          <SearchLocationWebViewTemplate
            handleLocation={handleLocation}
            closeWebview={closeWebview}
          />
        )}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.searchLocationButton} onPress={openWebview}>
            <View style={styles.labelContainer}>
              <Location />
              <Text style={{marginLeft: 6}}>주소를 입력해주세요.</Text>
            </View>
            <ArrowRight />
          </Pressable>
        </View>
        <SlideCategory />

        <FlatList
          style={{paddingHorizontal: 30, marginBottom: '25%'}}
          keyExtractor={item => item.id + ''}
          data={chatRooms}
          renderItem={({item}: {item: ChatRoomResponse}) => (
            <ChatRoomItem
              navigation={navigation}
              id={item.id}
              title={item.title}
              maxCount={item.maxCount}
              currentCount={item.currentCount}
              createDate={item.createDate}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '100%',
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  searchLocationButton: {
    width: 315,
    height: 36,
    backgroundColor: `${palette.bgGray}`,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 5,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MainScreen;
