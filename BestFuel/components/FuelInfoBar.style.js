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
        margin: 12,
        //flexDirection: "row",
            
    },
    
    infoItem: {

        fontSize: 25,
        fontWeight: "bold",
        padding: 15,
    },

    gas: {

        backgroundColor: "#FAAA8D",

        flexDirection: "row",
        borderRadius: 10,

    },

    ethanol: {
        backgroundColor: "#BEE5BF",
        flexDirection: "row",
        
        borderRadius: 10,
    },

    displayCoust: {
        backgroundColor: "#D8DBE2",

        margin: 12,

        borderRadius: 10,
        flexDirection: "row",
            
    },

    infoDisplay: {

        padding: 10,
        justifyContent: "center",
    },

    coust: {

        padding: 15,

        fontSize: 15,
        fontWeight: "bold",
        
        maxWidth: 100,
        

    },

    buttonsView: {
        flexDirection: "row",
        alignItems: "center",
    },

    btn: {
        
        borderRadius: 10,
        backgroundColor: "#4A6C6F",
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
        padding: 8,
        backgroundColor: "#663F46",
    },

})