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
                        { label: 'Manutenção Preventiva', value: 'prev' },
                        { label: 'Manutenção Corretiva', value: 'correct' },
                        { label: ' Manutenção Avaliativa', value: 'avail' },
                        { label: 'Troca de propriedade', value: 'troca' },
                        { label: 'Descarte', value: 'descarte' },
                        { label: 'Doação', value: 'doacao' },
                    ]
                }
                onValueChange={(value) => maintenceInfo.level = value}
                />
            </View>
            
            <View style={s.txtInputView}>
            <Text style={s.title}>Relatório da Manutenção</Text>
            <TextInput
            style={s.txtInput}
            placeholder="Descreva a manutenção"
            />
            </View>
            
        </View>
    )}