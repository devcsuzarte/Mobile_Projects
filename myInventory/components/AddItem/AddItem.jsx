import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./AddItem.style";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function AddItem({ navigation }) {
    
    

    const [itemTitle, setItemTitle] = useState('none');
    const [itemAmount, setItemAmount] = useState('none');

    
    const newItem = {
        title: itemTitle,
        amount: itemAmount,
    }



    const [itemList, setItemList] = useState([]);

    


    const onPress = () => {
        
        console.log(itemTitle + " - "  + itemAmount);

        newItem.title = itemTitle;
        newItem.amount = itemAmount;

        if(itemList == []){
            setItemList([newItem]);
        } else {
            setItemList(...itemList, newItem);
        }
       

        console.log(itemList);

        navigation.navigate('Home');


    }



    return (
        <>
            <View style={s.root}>

            <Text style={s.title}>
                Preencha as informações do item
            </Text>

            <View style={s.inputView}>
                <Text style={s.inputTxt}>
                Insert name:
                </Text>
                <TextInput
                    placeholder="Ex: iPhone 11 Pro MAX"
                    onChangeText={title => setItemTitle(title)}
                />
            </View>

            <View style={s.inputView}>
                <Text style={s.inputTxt}>
                Quantidade:
                </Text>
                <TextInput
                    placeholder="12"
                    onChangeText={amount => setItemAmount(amount)}

                />
            </View>

            <TouchableOpacity 

            onPress={onPress}
            style={s.registerBtn}>

                <Text style={s.btnText}>
                    Register Item
                </Text>
            </TouchableOpacity>



            </View>
        </>
        
    )
}