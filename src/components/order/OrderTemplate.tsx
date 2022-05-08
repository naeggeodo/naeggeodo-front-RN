import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderTimeScreen from './OrderTimeScreen';
import OrderInfoScreen from './OrderInfoScreen';

const OrderStack = createNativeStackNavigator();

const OrderTemplate = () => {
  return (
    <OrderStack.Navigator screenOptions={{headerShown: false}}>
      <OrderStack.Screen name="orderTime" component={OrderTimeScreen} />
      <OrderStack.Screen name="orderInfo" component={OrderInfoScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderTemplate;
