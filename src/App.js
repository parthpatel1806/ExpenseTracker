import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext.js';
import { TransactionsProvider } from './context/TransactionsContext';
import AppNavigator from './navigation/AppNavigator';

const theme = {
  colors: {
    primary: '#4CAF50',
    secondary: '#FF9800',
  }
};

// MUST use default export
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TransactionsProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </TransactionsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}