import { TextInput, View, Image, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import { AddScreen } from "../Screens/AddScreen/AddScreen";
import { HomeScreen } from "../Screens/HomeScreen/HomeScreen"
import { MaintenceCard } from "../Screens/MaintenceCard/MaintenceCard";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();


export function SelectScreen(){
    
    return (

       <Tab.Navigator>
        
        <Tab.Screen 
        name="Bem vindo, User" 
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" size={24} color="black" />
            )
        }}/>
        <Tab.Screen 
        name="Cadastrar Equipamento" 
        component={AddScreen}
        options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({color, size}) => (
                <Ionicons name="add-circle" size={24} color="black" />
            )
        }}/>
        <Tab.Screen 
        name="Manutenções" 
        component={MaintenceCard}
        options={{
            tabBarLabel: 'Maintance',
            tabBarIcon: ({color, size}) => (
                <Ionicons name="build-outline" size={24} color="black"/>
            )
        }}/>
        <Tab.Screen 
        name="Configurações" 
        component={AddScreen}
        options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-outline" size={24} color="black" />
            )
        }}/>

       </Tab.Navigator>
    )
}