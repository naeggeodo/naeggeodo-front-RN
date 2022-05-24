import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';
import fonts from '../../styles/fonts';

interface SearchKeywordProps {
  selected: string;
  keyword: string;
  handlePress: (e: GestureResponderEvent, selected: string) => void;
}

const SearchKeyword = ({
  keyword,
  handlePress,
  selected,
}: SearchKeywordProps) => {
  return (
    <Pressable
      onPress={e => handlePress(e, keyword)}
      style={[
        {...styles.container},
        keyword === selected ? styles.selectedContainer : styles.container,
      ]}>
      <Text
        style={[
          {...styles.keyword},
          keyword === selected ? styles.selectedKeyword : styles.keyword,
        ]}>
        {keyword}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: `${palette.LightGray2}`,
  },
  selectedContainer: {
    backgroundColor: `${palette.lightOrange}`,
  },
  keyword: {
    fontFamily: `${fonts.sqBold}`,
    fontSize: 15,
    color: `${palette.black}`,
  },
  selectedKeyword: {
    color: `${palette.mainOrange}`,
  },
});

export default SearchKeyword;
