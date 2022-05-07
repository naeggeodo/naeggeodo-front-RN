import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import palette from '../../styles/palette';
import SearchGray from '../../assets/icons/searchgray.svg';
import SearchKeyword from './SearchKeyword';

const SearchTemplate = () => {
  const [autoKeyword, setAutoKeyword] = useState('불닭치킨');

  const selectAutoKeyword = useCallback<(e: any) => void>(
    e => {
      console.log(e.target);
    },
    [autoKeyword],
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
        />
      </View>
      <View style={styles.cardContainer}>
        <SearchKeyword handlePress={selectAutoKeyword} keyword="불닭치킨" />
        <SearchKeyword handlePress={selectAutoKeyword} keyword="닭발" />
        <SearchKeyword handlePress={selectAutoKeyword} keyword="교촌치킨" />
        <SearchKeyword handlePress={selectAutoKeyword} keyword="허니콤보" />
        <SearchKeyword handlePress={selectAutoKeyword} keyword="무료배달" />
        <SearchKeyword handlePress={selectAutoKeyword} keyword="파리바게트" />
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
    height: 35,
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
