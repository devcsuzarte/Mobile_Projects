import { TextInput, View, Image, TouchableOpacity } from "react-native"
import { s } from "./SearchBar.style"
import { useState } from "react"
import { FontAwesome } from '@expo/vector-icons'; 

export function SearchBar(){

    

    const [inputToSearch, setInputToSearch] = useState("");
    return (

        <View style={s.root}>
            <TextInput 
            style={s.txtInput}
            placeholder="Type here to search"
            onChangeText={text => setInputToSearch(text)}
            >
            </TextInput>
            
            <TouchableOpacity
                
            >
            <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>

        </View>
    )
}