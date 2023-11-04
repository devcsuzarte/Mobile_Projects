import { Text, View, ScrollView } from "react-native";
import { SearchBar } from "../../SearchBar/SearchBar";
import { EquipCard } from "../../EquipCard/EquipCard";
import { s } from "./HomeScreen.style";



export function HomeScreen(){
    return (
        <View>
            <SearchBar/>
            <ScrollView>
                <EquipCard/>
                <EquipCard/>
                <EquipCard/>
                <EquipCard/>
                <EquipCard/>
                <EquipCard/>
                <EquipCard/>
                <EquipCard/>
                <EquipCard/>
    
            </ScrollView>
            
        </View>
    )}