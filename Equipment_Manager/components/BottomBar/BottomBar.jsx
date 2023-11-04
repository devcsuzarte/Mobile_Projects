import { TextInput, View, Image, TouchableOpacity } from "react-native"
import { s } from "./BottomBar.style"
import { Ionicons } from '@expo/vector-icons'; 
import { AddScreen } from "../Screens/AddScreen/AddScreen";
import { HomeScreen } from "../Screens/HomeScreen/HomeScreen"
import { useState } from "react";


export function BottomBar(){
    
    return (

        <View style={s.root}>
            <TouchableOpacity>
                <Ionicons name="ios-home-outline" size={24} color="black" />   
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="md-add-circle-outline" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="ios-hardware-chip-outline" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Ionicons name="ios-settings-outline" size={24} color="black" />
            </TouchableOpacity>


        </View>
    )
}