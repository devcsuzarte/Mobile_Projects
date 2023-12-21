import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FuelInfoBar } from './components/FuelInfoBar';
import { s } from './App.style';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function App() {

  return (
    <SafeAreaProvider>

      <View style={s.header}>
          
          <FontAwesome5 name="gas-pump" size={24} color="black" style/>
          <Text style={s.headerTxt}>
             Combustível Certo
          </Text>
        </View>

      <SafeAreaView style={s.root}>
        <View>
         <FuelInfoBar/>
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}
