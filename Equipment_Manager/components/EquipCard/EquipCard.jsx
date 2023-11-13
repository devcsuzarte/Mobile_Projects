import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { s } from "./EquipCard.style";


export function EquipCard(){
    
    let equipIcon = <FontAwesome name="th-list" size={48} color="black" />

    return (
        <TouchableOpacity style={s.root}>
             <View style={s.icon}>
            {equipIcon}
            </View>

            <View>
                <Text>Desktop</Text>
                <Text>Contabilidade</Text>
                <Text>23/10/2023</Text>
            </View>

                <Text style={s.id}>ID: 73246</Text>
        </TouchableOpacity>
    )
}