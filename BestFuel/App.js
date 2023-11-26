import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getBestFuel } from './utils/bestFuel';
import { useState } from 'react';
import { FuelInfoBar } from './components/FuelInfoBar';

export default function App() {



  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
        <Text>
            Insert the info below
        </Text> 
         <FuelInfoBar/>
      </View>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}
