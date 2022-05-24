import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputEndEditingEventData,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import palette from '../../styles/palette';
import SearchGray from '../../assets/icons/searchgray.svg';
import SearchKeyword from './SearchKeyword';
import {SearchService} from '../../api/SearchService';
import {useAppDispatch} from '../../store';
import searchSlice, {Tag} from '../../slices/search';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducer';
import {AxiosResponse} from 'axios';
import {ChatRoomResponse} from '../../slices/chatRoom';

const SearchTemplate = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [selected, setSelectedKeyword] = useState<string>('');
  const tags: Tag[] = useSelector((state: RootState) => state.search.tags);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await SearchService.getTagList();
        dispatch(searchSlice.actions.getTagList(response.data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

  const selectKeyword = useCallback<(e: any, selected: string) => void>(
    async (e, selected) => {
      setSelectedKeyword(selected);
      const response: AxiosResponse<ChatRoomResponse[]> =
        await SearchService.getChatRoomsByTag(selected);
      dispatch(searchSlice.actions.getChatRoomsByTag(response.data));
    },
    [keyword],
  );

  const searchChatRooms = useCallback<
    (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void
  >(
    async e => {
      try {
        if (!keyword) return;
        const response: AxiosResponse<ChatRoomResponse[]> =
          await SearchService.getChatRooms(keyword);
        console.log(response);
        dispatch(searchSlice.actions.getChatRooms(response.data));
      } catch (err) {
        console.log(err);
      } finally {
        setKeyword('');
      }
    },
    [dispatch],
  );

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <SearchGray />
        <TextInput
          style={styles.inputStyle}
          placeholder="검색어를 입력해주세요."
          placeholderTextColor={`${palette.DarkGray}`}
          clearButtonMode="while-editing"
          enablesReturnKeyAutomatically
          underlineColorAndroid="transparent"
          multiline={true}
          blurOnSubmit={true}
          returnKeyType="search"
          onEndEditing={searchChatRooms}
          value={keyword}
          onChange={e => {
            setKeyword(e.nativeEvent.text);
          }}
        />
      </View>
      <View style={styles.cardContainer}>
        {tags.length !== 0 &&
          tags.map(tag => {
            return (
              <SearchKeyword
                selected={selected}
                keyword={tag.msg}
                key={tag.idx}
                handlePress={(e, selected: string) =>
                  selectKeyword(e, selected)
                }
              />
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    marginTop: 35,
  },
  sectionStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${palette.bgGray}`,
    borderRadius: 10,
    height: 35,
  },
  inputStyle: {
    width: '90%',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: `${palette.bgGray}`,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: '400',
  },
  placeholderStyle: {
    color: `${palette.DarkGray}`,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
});

export default SearchTemplate;
