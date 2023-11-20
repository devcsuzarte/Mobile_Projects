import { Text, View, ScrollView, TextInput, } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { SearchBar } from "../../SearchBar/SearchBar";
import { EquipCard } from "../../EquipCard/EquipCard";
import { s } from "./MaintenceCard.style";

let maintenceInfo = {

    equipID: 'none',
    level: 'none',
    description: 'none'
}



export function MaintenceCard(){
    return (
        <View style={s.root}>
            <View style={s.info}>
                <Text style={s.id}>
                    ID: 1243
                </Text>
                <View>
                    <Text>Tipo : Desktop</Text>
                    <Text>Setor: Tecnologia da Informação</Text>
                    <Text>Ultima mauntenção: 23/10/2023</Text>
                </View>
            </View>

            <View style={s.selectLevel}>
            <RNPickerSelect
                style={s.select}
                placeholder={{label: 'Selecione um tipo', value: null}}
                items={
                    options = [
                        { label: 'Preventiva', value: 'prev' },
                        { label: 'Corretiva', value: 'correct' },
                        { label: 'Avaliativa', value: 'avail' },
                    ]
                }
                onValueChange={(value) => maintenceInfo.level = value}
                />
            </View>
            
            <View>
            <Text>Relatório da Manutenção</Text>
            <TextInput
            style={s.txtInput}
            placeholder="Descreva a manutenção"
            />
            </View>
            
        </View>
    )}