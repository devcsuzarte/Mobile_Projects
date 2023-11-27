import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { s } from "./FuelInfoBar.style";
import DialogInput from "react-native-dialog-input";
import { getBestFuel, showBestFuel } from "../utils/bestFuel";

export function FuelInfoBar(){

    const [gasPrice, setGasPrice] = useState(0.0);
    const [gasAutonomy, setGasAutonomy] = useState(0.0);
    const [ethanolPrice, setEthanolPrice] = useState(0.0);
    const [ethanolAutonomy, setEthanolAutonomy] = useState(0.0);
    const [dialogVisible, setIsDialogVisible] = useState(false);
    const [displayInfo, setDisplayInfo] = useState('');
    const [titleDialog, setTitleDialog] = useState('')
    const [hintDialog, setHintDialog] = useState('')
    const [showBestFuel, setShowBestFuel] = useState('Insira as informaçoes');

    function onPress(display) {
        
        setIsDialogVisible(true)
        setDisplayInfo(display);
        console.log(displayInfo);

        switch (display){

            case "gasPrice": 
                setTitleDialog("Insira o preço da Gasolina");
                setHintDialog("Ex: 5.50");
                break;
            case "gasAutonomy": 
                setTitleDialog("Insira autonomia na Gasolina");
                setHintDialog("Ex: 12.8");
                break; 
            case "ethanolPrice": 
                setTitleDialog("Insira o preço do Etanol");
                setHintDialog("Ex: 3.75");
                break;
            case "ethanolAutonomy": 
                setTitleDialog("Insira o consumo no Etanol");
                setHintDialog("Ex: 10.5");
                break; 
        }
        
    
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
                    title={titleDialog}
                    hintInput ={hintDialog}
                    submitInput={ (textInput) => {
                        setInfoDisplay(textInput, displayInfo), 
                        setIsDialogVisible(false)} }
                    closeDialog={ () => {setIsDialogVisible(false)}}
                /> 
        
        <View style={s.root}>
            <View>
                <Text style={s.displayFuel}>
                {showBestFuel}
                </Text>
            </View>

            <View style={s.displayInfo}>

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