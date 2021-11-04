import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './Stacks/RootStack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './redux';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <PaperProvider>
      <StoreProvider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </StoreProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
