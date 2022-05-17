import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import palette from '../../styles/palette';

interface SearchKeywordProps {
  keyword: string;
  handlePress: (e: GestureResponderEvent) => void;
}

const SearchKeyword = ({keyword, handlePress}: SearchKeywordProps) => {
  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Text style={styles.keyword}>{keyword}</Text>
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
  keyword: {
    fontWeight: '500',
    fontSize: 15,
    color: `${palette.black}`,
  },
});

export default SearchKeyword;
