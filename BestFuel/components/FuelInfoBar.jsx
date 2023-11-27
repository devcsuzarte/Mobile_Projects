import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { s } from "./FuelInfoBar.style";
import DialogInput from "react-native-dialog-input";
import { getBestFuel } from "../utils/bestFuel";

export function FuelInfoBar({}){

    const [gasPrice, setGasPrice] = useState(3);
    const [gasAutonomy, setGasAutonomy] = useState(14);
    const [ethanolPrice, setEthanolPrice] = useState(3);
    const [ethanolAutonomy, setEthanolAutonomy] = useState(10);
    const [dialogVisible, setIsDialogVisible] = useState(false);
    const [displayInfo, setDisplayInfo] = useState('');

    function onPress(display) {
        
        setIsDialogVisible(true)
        setDisplayInfo(display);
        console.log(displayInfo);
        
    
    }

    function sendInfo(){
        setShowBestFuel(getBestFuel(gasPrice, gasAutonomy, ethanolPrice, ethanolAutonomy));
    }

    function setInfoDisplay(inputInfo, getDisplay){

        console.log("aq no set" + displayInfo + " o input info " + inputInfo);

        switch (getDisplay){

            case "gasPrice": 
                setGasPrice(inputInfo);
                break;
            case "gasAutonomy": 
                setGasAutonomy(inputInfo);
                break; 
            case "ethanolPrice": 
                setEthanolPrice(inputInfo);
                break;
            case "ethanolAutonomy": 
                setEthanolAutonomy(inputInfo);
                break; 
        }
    }

    return(
        
        <>

            <DialogInput
                    isDialogVisible={dialogVisible}
                    title={"Insira o preço da gasolina"}
                    hintInput ={"Ex: 3.75"}
                    submitInput={ (textInput) => {
                        setInfoDisplay(textInput, displayInfo), 
                        setIsDialogVisible(false)} }
                    closeDialog={ () => {setIsDialogVisible(false)}}
                /> 
        
        <View style={s.root}>
            <View style={s.gas}>
                <TouchableOpacity
                    onPress={() => {onPress('gasPrice')}}
                >            
                    <Text style={s.infoItem}>
                        {gasPrice}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {onPress('gasAutonomy')}}
                >
                    <Text style={s.infoItem}>
                        {gasAutonomy}
                    </Text>
                </TouchableOpacity>        
            </View>

            <View style={s.ethanol}>
                <TouchableOpacity
                    onPress={() => {onPress('ethanolPrice')}}
                >
                    <Text style={s.infoItem}>
                    {ethanolPrice}
                </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => {onPress('ethanolAutonomy')}}
                >
                <Text style={s.infoItem}>
                    {ethanolAutonomy}
                </Text>
                </TouchableOpacity>
                
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