import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style"
import { SearchBar } from './components/SearchBar/SearchBar';
import { BottomBar } from './components/BottomBar/BottomBar';

export default function App() {
  return (

    <>
      <SafeAreaProvider style={s.root}>
      <SafeAreaView style={s.app}>
        <Text style={s.header}>EQM - Bem vindo</Text>
        <SearchBar style={s.searchBar}/>
        <Text style={s.content}></Text>
      </SafeAreaView>
      </SafeAreaProvider>
      <BottomBar style={s.bottomBar}/>
    </>
   
    
    
);

  }
