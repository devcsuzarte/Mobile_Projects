import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { s } from "./FuelInfoBar.style";
import DialogInput from "react-native-dialog-input";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Alert } from 'react-native'

export function FuelInfoBar(){

    const [gasPrice, setGasPrice] = useState(0.0.toFixed(2));
    const [gasAutonomy, setGasAutonomy] = useState(0.0.toFixed(2));
    const [ethanolPrice, setEthanolPrice] = useState(0.0.toFixed(2));
    const [ethanolAutonomy, setEthanolAutonomy] = useState(0.0.toFixed(2));

    const [gasCoust, setGasCoust] = useState(0.0.toFixed(2));
    const [ethanolCoust, setEthanolCoust] = useState(0.0.toFixed(2));
    
    const [dialogVisible, setIsDialogVisible] = useState(false);
    const [displayInfo, setDisplayInfo] = useState('');
    const [titleDialog, setTitleDialog] = useState('')
    const [hintDialog, setHintDialog] = useState('')
    const [showBestFuel, setShowBestFuel] = useState('Insira as informações:');

    function onPress(display) {
        
        setIsDialogVisible(true)
        setDisplayInfo(display);

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

    function getBestFuel(gasPrice, gasAutonomy, ethanolPrice, ethanolAutonomy){


        const costEthanol = ethanolPrice / ethanolAutonomy;
        const costGas = gasPrice / gasAutonomy;

    
        setGasCoust(costGas.toFixed(2));
        setEthanolCoust(costEthanol.toFixed(2));
        
    
        if(costEthanol < costGas){
        
            return ">> Etanol <<";
            
             
        } else {
            
            return ">> Gasolina <<";
        }
    }


    function sendInfo(){

        if((Number(gasPrice) > Number(0) && Number(gasAutonomy) > Number(0)) 
            && (Number(ethanolPrice) > Number(0) && Number(ethanolAutonomy) > Number(0)) 
        ){
            
            setShowBestFuel(getBestFuel(gasPrice, gasAutonomy, ethanolPrice, ethanolAutonomy));
        } else {
            Alert.alert(" Preencha todos os campos corretamente");
            resetDisplays();

        }

        

        
    }



    function setInfoDisplay(inputInfo, getDisplay){

        switch (getDisplay){

            case "gasPrice": 
                setGasPrice(Number(inputInfo).toFixed(2));
                break;
            case "gasAutonomy": 
                setGasAutonomy(Number(inputInfo).toFixed(2));
                break; 
            case "ethanolPrice": 
                setEthanolPrice(Number(inputInfo).toFixed(2));
                break;
            case "ethanolAutonomy": 
                setEthanolAutonomy(Number(inputInfo).toFixed(2));
                break; 
        }

    }


 const resetDisplays = () => {

    setGasPrice(0.0.toFixed(2));
    setGasAutonomy(0.00.toFixed(2));
    setEthanolPrice(0.00.toFixed(2));
    setEthanolAutonomy(0.00.toFixed(2));
    setGasCoust(0.00.toFixed(2));
    setEthanolCoust(0.00.toFixed(2));
    setShowBestFuel("Insira as informações:")
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
                    style={s.infoDisplay}
                    onPress={() => {onPress('gasPrice')}}
                >       
                    <Text style={s.infoLable}>
                        Preço    
                    </Text>     
                    <Text style={s.infoItem}>
                        {gasPrice}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={s.infoDisplay}
                    onPress={() => {onPress('gasAutonomy')}}
                >
                    <Text style={s.infoLable}>
                    Km/L
                    </Text>
                    <Text style={s.infoItem}>
                        {gasAutonomy}
                    </Text>
                </TouchableOpacity>        
            </View>

            <View style={s.ethanol}>
                <TouchableOpacity
                    style={s.infoDisplay}
                    onPress={() => {onPress('ethanolPrice')}}
                >
                    <Text style={s.infoLable}>
                        Preço
                    </Text>
                    <Text style={s.infoItem}>
                    {ethanolPrice}
                </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={s.infoDisplay}
                    onPress={() => {onPress('ethanolAutonomy')}}
                >
                <Text style={s.infoLable}>
                    Km/L
                </Text>
                <Text style={s.infoItem}>
                    {ethanolAutonomy}
                </Text>
                </TouchableOpacity>
                
            </View>



            </View>


            <View style={s.displayCoust}>

                <Text style={s.coust}>
                    Custo por KM:
                </Text>

                <View style={s.coustGas}>
                    <Text style={s.infoItem}>
                            {gasCoust}
                    </Text>   
                </View>

                <View style={s.coustEthanol}>
                    <Text style={s.infoItem}>
                            {ethanolCoust}
                    </Text>   
                </View>
            </View>

            <View style={s.buttonsView}>
                <TouchableOpacity style={s.btn}
                onPress={sendInfo}
                >
                    <Text style={s.btnTxt}>
                        Verificar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={s.btnRestore}
                onPress={resetDisplays}
                >
                    <MaterialCommunityIcons 
                    name="restore" 
                    size={48} 
                    color="white" />
                </TouchableOpacity>


            </View>
            
        </View>
        

        </>
    )
}