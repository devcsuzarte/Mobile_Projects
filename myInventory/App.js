import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import { AddItem } from './components/AddItem/AddItem';
import { s } from './App.style'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemScreen } from './components/ItemScreen/ItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Add' component={AddItem}/>
        <Stack.Screen name= 'Item' component={ItemScreen}/>
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}
