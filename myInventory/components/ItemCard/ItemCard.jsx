import { View, Text } from "react-native";
import { s } from "./ItemCard.style"
import { Feather } from '@expo/vector-icons';
import { setShowData, info } from "../../firebase"; 
import { useState } from "react";


export function ItemCard(props){

    

    //setShowAmount(info.itemAmount)

    return(
       
            <View style={s.root}>
                
                <Feather name="package" size={62} color="black" />
                <View style={s.info}>
                    <Text style={s.itemName}>iPhone 11 PRO</Text>
                    <View style={s.units}>
                    <Text>Unidades: {props.ammout}</Text>
                    <Text></Text>

                    </View>
                    
                    </View>

            </View>
    )
}