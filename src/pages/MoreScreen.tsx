import React from 'react';
import MoreTemplate from '../components/more/MoreTemplate';
import {SafeAreaView} from 'react-native-safe-area-context';

const MoreScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <MoreTemplate />
    </SafeAreaView>
  );
};

export default MoreScreen;
