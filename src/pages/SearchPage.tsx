import React from 'react';
import SearchTemplate from '../components/search/SearchTemplate';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchPage = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <SearchTemplate />
    </SafeAreaView>
  );
};

export default SearchPage;
