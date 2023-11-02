import { TextInput, View, Image } from "react-native"
import { s } from "./SearchBar.style"

export function SearchBar(){
    return (

        <View style={s.root}>
            <TextInput 
            style={s.txtInput}
            placeholder="Type here to search"
            >
            </TextInput>
            <Image
                style={s.avatar}
                source={{uri: "https://i.pravatar.cc/300"}}
            />

        </View>
    )
}