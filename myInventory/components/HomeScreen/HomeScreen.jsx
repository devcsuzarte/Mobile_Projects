import { View, Text, TouchableOpacity, Button } from "react-native";
import { SearchBar } from "../SearchBar/SearchBar";
import { Feather } from '@expo/vector-icons'; 
import { ItemCard } from "../ItemCard/ItemCard";
import { s } from "./HomeScreen.style";
import { FontAwesome } from '@expo/vector-icons'; 


export function HomeScreen({ navigation }){


    return(
        <View style={s.root}>
            <SearchBar/>

                <ItemCard/>
        

            <TouchableOpacity style={s.btn}
                onPress={() => navigation.navigate('Add')}
            >
                
                <FontAwesome name="plus" size={24} color="white" />

            </TouchableOpacity> 
               
            
        </View>
    )
}