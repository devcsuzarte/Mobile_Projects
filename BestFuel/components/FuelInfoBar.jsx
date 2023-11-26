import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { s } from "./FuelInfoBar.style";
import DialogInput from "react-native-dialog-input";
import { getBestFuel } from "../utils/bestFuel";

export function FuelInfoBar(){

    const [gasPrice, setGasPrice] = useState(3);
    const [gasAutonomy, setGasAutonomy] = useState(14);
    const [ethanolPrice, setEthanolPrice] = useState(3);
    const [ethanolAutonomy, setEthanolAutonomy] = useState(10);

    const [dialogVisible, setIsDialogVisible] = useState(false);

    const onPress = () => setIsDialogVisible(true)

    function sendInfo(){
        getBestFuel(gasPrice, gasAutonomy, ethanolPrice, ethanolAutonomy);
    }

    return(
        
        <>
        
        <View style={s.root}>
            <View style={s.gas}>
                <TouchableOpacity
                    onPress={onPress}
                >   
                    <DialogInput
                    isDialogVisible={dialogVisible}
                    title={"DialogInput 1"}
                    message={"Message for DialogInput #1"}
                    hintInput ={"HINT INPUT"}
                    submitInput={ (inputText) => {
                        setGasPrice(inputText), 
                        setIsDialogVisible(false)} }
                    closeDialog={ () => {setIsDialogVisible(false)}}
                />             
                    <Text style={s.infoItem}>
                        {gasPrice}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={s.infoItem}>
                        {gasAutonomy}
                    </Text>
                </TouchableOpacity>        
            </View>

            <View style={s.ethanol}>
                <Text style={s.infoItem}>
                    {ethanolPrice}
                </Text>
                <Text style={s.infoItem}>
                    {ethanolAutonomy}
                </Text>
            </View>
            
        </View>

        <TouchableOpacity style={s.btn}
            onPress={sendInfo}
        >
                <Text style={s.btnTxt}>
                    VERIFY
                </Text>
            </TouchableOpacity>
        </>
    )
}