import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OrderTemplate from '../components/order/OrderTemplate';
import {SafeAreaView} from 'react-native-safe-area-context';

const OrderPage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <OrderTemplate />
    </SafeAreaView>
  );
};

export default OrderPage;

const styles = StyleSheet.create({});
