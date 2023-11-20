import { Button, ScrollView, Text, View , TouchableOpacity, Alert} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { s } from "./AddScreen.style";
import { useState } from "react";
import uuid  from 'react-native-uuid';


export function AddScreen(){

const selectEquipment = {

    category: [
        { label: 'Computadores, Notebooks e Movéis', value: 'disp'},
        { label: 'Dispositivos de Rede', value: 'lan' },
        { label: 'Dispositivos de Comunicação', value: 'coms' },
        { label: 'Impressoras e Periféricos', value: 'printerAndPeripheral' },
       
    ],

    origin: [

        { label: 'Contabilidade', value: 'ctbl' },
        { label: 'Financeiro', value: 'finance' },
        { label: 'Recepção', value: 'rcp' },
        { label: 'Suprimentos', value: 'suply'},
        { label: 'Tecnologia da Informação', value: 'ti'},

    ],

    status: [

        { label: 'Em produção', value: 'production' },
        { label: 'Em Manutenção', value: 'maintence' },
        { label: 'Em uso', value: 'use' },
        { label: 'Em trânsito para reparo', value: 'transit' },
    ]
};


const equipInfo = {
    id: 'none',
    category: 'none',
    type: 'none',
    origin: 'none',
    status: 'none'    
};



const onDone = () => {

    equipInfo.id = uuid.v4();    
    console.log(equipInfo);
};


const [selectOptions, setSelectOptions] = useState([]);
 

function getOptions(value){

    let options;

    switch (value) {

        

        case 'disp':
            options = [
                { label: 'Desktop', value: 'desktop'},
                { label: 'Notebook', value: 'laptop' },
                { label: 'Tablet', value: 'tablet' },
                { label: 'Celular', value: 'celular' },
               
            ]
            setSelectOptions(options);
            equipInfo.category = value;
            console.log(options)
            break;

        case 'lan':
            options = [
                { label: 'Roteadores', value: 'wlan'},
                { label: 'Switchs', value: 'switchs' },
                { label: 'Cabo de Rede', value: 'cable' },
                { label: 'Modem', value: 'lan' },
               
            ]
            setSelectOptions(options);
            console.log(options);
            
            break;
    
        default:
            break;
    }
}



    return (
        <ScrollView style={s.root}>

            <View style={s.select}>
                <Text style={s.title}>
                    Categoria:
                </Text>
                <RNPickerSelect
                style={s.select}
                placeholder={{label: 'Selecione um tipo', value: null}}
                items={selectEquipment.category}
                onValueChange={(value) => getOptions(value)}
                
                />
            </View>

            <View style={s.select}>
                <Text style={s.title}>
                    Tipo de equipamento:
                </Text>
                <RNPickerSelect
                style={s.select}
                placeholder={{label: 'Selecione um tipo', value: null}}
                items={selectOptions}
                onValueChange={(value) => equipInfo.type = value}
                />
            </View>


            <View style={s.select}>
                <Text style={s.title}>
                    Origem:
                </Text>
                <RNPickerSelect
                style={s.select}
                placeholder={{label: 'Selecione um tipo', value: null}}
                items={selectEquipment.origin}
                onValueChange={(value) => equipInfo.origin = value}
                />
            </View>

            <View style={s.select}>
                <Text style={s.title}>
                    Status:
                </Text>
                <RNPickerSelect
                style={s.select}
                placeholder={{label: 'Selecione um tipo', value: null}}
                items={selectEquipment.status}
                onValueChange={(value) => equipInfo.status = value}
                />
            </View>

            
               <TouchableOpacity
                onPress={onDone}
               >
                    <View style={s.button}>
                    <Text style={s.btnText}>Finalizar Cadastro</Text>
                    </View>
               </TouchableOpacity>
           
        </ScrollView>
    )}