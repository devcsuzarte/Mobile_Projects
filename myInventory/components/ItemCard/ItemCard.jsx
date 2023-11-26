import { View, Text } from "react-native";
import { s } from "./ItemCard.style"
import { Feather } from '@expo/vector-icons'; 


export function ItemCard(){


    return(
       
            <View style={s.root}>
                
                <Feather name="package" size={62} color="black" />
                <View style={s.info}>
                    <Text style={s.itemName}>iPhone 11 PRO</Text>
                    <View style={s.units}>
                    <Text>Unidades:</Text>
                    <Text>15</Text>

                    </View>
                    
                    </View>

            </View>
    )
}