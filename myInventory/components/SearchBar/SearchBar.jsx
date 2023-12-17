import { TextInput, View, Image, TouchableOpacity } from "react-native"
import { s } from "./SearchBar.style"
import { useState } from "react"
import { FontAwesome } from '@expo/vector-icons'; 
import { getItem } from "../../firebase";
import { HomeScreen } from "../HomeScreen/HomeScreen";



export function SearchBar(){

    

    const [inputToSearch, setInputToSearch] = useState("");

    function getItemFromDataBase(inputSearch){

        getItem(inputSearch);

    }

    
    return (

        <View style={s.root}>
            <TextInput 
            style={s.txtInput}
            placeholder="Type here to search"
            onChangeText={text => setInputToSearch(text)}
            >
            </TextInput>
            
            <TouchableOpacity
                onPress={getItemFromDataBase(inputToSearch)}
            >
            <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>

        </View>
    )
}