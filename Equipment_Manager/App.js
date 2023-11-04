import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style"
import { SearchBar } from './components/SearchBar/SearchBar';
import { BottomBar } from './components/BottomBar/BottomBar';
import { EquipCard } from './components/EquipCard/EquipCard';
import { SelectScreen } from './components/SelectScreen/SelectScreen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

//const [selectScreen, setSelectScreen] = useState("home");




export default function App() {
  return (

    <NavigationContainer>
      <SelectScreen/>
    </NavigationContainer>
   
    
    
);

  }
