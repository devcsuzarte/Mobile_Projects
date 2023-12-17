import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { SearchBar } from "../SearchBar/SearchBar";
import { Feather } from '@expo/vector-icons'; 
import { ItemCard } from "../ItemCard/ItemCard";
import { s } from "./HomeScreen.style";
import { FontAwesome } from '@expo/vector-icons'; 
import { getItem, info } from "../../firebase";
import { useState } from "react"



export function HomeScreen({ navigation }){

    const [inputToSearch, setInputToSearch] = useState("");
    const [showAmount, setShowAmount] = useState("-");

    function sendToItem(send) {

        return send;
    }

    function getItemFromDataBase(inputSearch){

        getItem(inputSearch);
        console.log(getItem(inputSearch))
        setShowAmount(info.itemAmount);

    }

    function onPress(){
        getItemFromDataBase(inputToSearch);
    }


    return(
        <View style={s.root}>


            <View style={s.search}>
                <TextInput 
                style={s.txtInput}
                placeholder="Type here to search"
                onChangeText={text => setInputToSearch(text)}
                >
                </TextInput>
                
                <TouchableOpacity
                    onPress={onPress}
                >
                <FontAwesome name="search" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <ItemCard
                ammout={sendToItem(showAmount)}
            />
        
            <TouchableOpacity style={s.btn}
                onPress={() => navigation.navigate('Add')}
            >
                
            </TouchableOpacity>
            
        </View>
    )
}