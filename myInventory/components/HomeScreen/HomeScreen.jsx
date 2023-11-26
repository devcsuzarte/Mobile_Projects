import { View, Text } from "react-native";
import { SearchBar } from "../SearchBar/SearchBar";
import { Feather } from '@expo/vector-icons'; 
import { ItemCard } from "../ItemCard/ItemCard";


export function HomeScreen(){


    return(
        <View>
            <SearchBar/>
            <ItemCard/>
        </View>
    )
}