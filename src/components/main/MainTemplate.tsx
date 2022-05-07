import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Location from '../../assets/icons/location.svg';
import palette from '../../styles/palette';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import SlideCategory from './SlideCategory';
import SearchLocationWebViewTemplate from '../search-location-web-view/SearchLocationWebViewTemplate';
import {useDispatchSearchLocation} from '../../hooks/useDispatchSeachLocation';
import ChatRoomItem from './ChatRoomItem';
import {ChatRoomInfoProps} from './mainTypes';
import axios, {AxiosResponse} from 'axios';
import {useAppDispatch} from '../../store';
import categoriesSlice from '../../slices/categories';

const ChatInfo: ChatRoomInfoProps[] = [
  {id: '1', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '2', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '3', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '4', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '5', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '6', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '7', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '8', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '9', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '10', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '11', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '12', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
  {id: '13', title: '이마트 백석 버거킹점', count: 1, total: 2, time: 34},
];

const MainTemplate = () => {
  const {webviewIsOpened, openWebview, handleLocation, closeWebview} =
    useDispatchSearchLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse = await axios.get(
          'http://3.38.33.232:9090/categories',
        );
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

  return (
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
        keyExtractor={item => item.id}
        data={ChatInfo}
        renderItem={({item}: {item: ChatRoomInfoProps}) => (
          <ChatRoomItem
            id={item.id}
            title={item.title}
            time={item.time}
            total={item.total}
            count={item.count}
          />
        )}
      />
    </View>
  );
};

export default MainTemplate;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffffff',
    height: '100%',
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
