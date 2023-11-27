import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getBestFuel } from './utils/bestFuel';
import { useState } from 'react';
import { FuelInfoBar } from './components/FuelInfoBar';
import { s } from './App.style';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View >
         <FuelInfoBar/>
      </View>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}
