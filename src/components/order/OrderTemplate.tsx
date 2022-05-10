import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderTypeScreen from './OrderTypeScreen';
import OrderInfoScreen from './OrderInfoScreen';

const OrderStack = createNativeStackNavigator();

const OrderTemplate = () => {
  return (
    <OrderStack.Navigator screenOptions={{headerShown: false}}>
      <OrderStack.Screen name="orderType" component={OrderTypeScreen} />
      <OrderStack.Screen name="orderInfo" component={OrderInfoScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderTemplate;
