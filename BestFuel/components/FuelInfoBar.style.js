import { StyleSheet } from "react-native";

export const s = StyleSheet.create({

    root: {

        alignItems: "center",
        
    },

    displayFuel: {

        fontSize: 30,
        padding: 30,

    },

    displayInfo: {
        flexDirection: "row",
            
    },
    
    infoItem: {

        fontSize: 25,
        fontWeight: "bold",
        padding: 15,
    },

    gas: {

        backgroundColor: "orange",

        flexDirection: "row",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

    },

    ethanol: {
        backgroundColor: "green",
        flexDirection: "row",

        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    buttonsView: {
        flexDirection: "row",
    },

    btn: {
        
        borderRadius: 10,
        backgroundColor: "blue",
        margin: 20,
    },

    btnTxt: {

        paddingVertical: 15,
        paddingHorizontal: 25,
        fontSize: 25,
        color: "white",


    },

    btnRestore: {
        
        borderRadius: 10,
        backgroundColor: "red",
    },

})