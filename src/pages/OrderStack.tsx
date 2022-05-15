import React from 'react';
import OrderTypeScreen from '../components/order/OrderTypeScreen';
import OrderInfoScreen from '../components/order/OrderInfoScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="orderType" component={OrderTypeScreen} />
      <Stack.Screen name="orderInfo" component={OrderInfoScreen} />
    </Stack.Navigator>
  );
};

export default OrderStack;
