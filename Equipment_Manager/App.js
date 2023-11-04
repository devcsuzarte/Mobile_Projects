import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style"
import { SearchBar } from './components/SearchBar/SearchBar';
import { BottomBar } from './components/BottomBar/BottomBar';
import { EquipCard } from './components/EquipCard/EquipCard';
import { useState } from 'react';

//const [selectScreen, setSelectScreen] = useState("home");




export default function App() {
  return (

    <>
      <SafeAreaProvider style={s.root}>
      <SafeAreaView style={s.app}>
        <Text style={s.header}>EQM - Bem vindo</Text>
        <SearchBar style={s.searchBar}/>
        <ScrollView style={s.content}>

          
        </ScrollView>
        
      </SafeAreaView>
      </SafeAreaProvider>
      <BottomBar style={s.bottomBar}/>
    </>
   
    
    
);

  }
