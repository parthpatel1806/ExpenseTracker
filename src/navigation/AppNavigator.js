import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/transactions/HomeScreen';
import TransactionFormScreen from '../screens/transactions/TransactionFormScreen';
import TransactionViewScreen from '../screens/transactions/TransactionViewScreen';

const Stack = createStackNavigator();

// MUST use default export
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TransactionForm" component={TransactionFormScreen} />
      <Stack.Screen name="TransactionView" component={TransactionViewScreen} />
    </Stack.Navigator>
  );
}