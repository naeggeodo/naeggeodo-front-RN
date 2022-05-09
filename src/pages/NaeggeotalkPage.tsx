import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NaeggeotalkTemplate from '../components/naeggeotalk/NaeggeotalkTemplate';

const NaeggeotalkPage = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
      <NaeggeotalkTemplate />
    </SafeAreaView>
  );
};

export default NaeggeotalkPage;
