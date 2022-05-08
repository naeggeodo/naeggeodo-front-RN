import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MoreTemplate from '../components/more/MoreTemplate';
import {SafeAreaView} from 'react-native-safe-area-context';

const MorePage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <MoreTemplate />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MorePage;
