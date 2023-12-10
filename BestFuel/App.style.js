import { StyleSheet } from "react-native";

export const s = StyleSheet.create({


    header: {

        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

        paddingTop: 50,
        paddingBottom: 10,

        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 30,


        backgroundColor: "#BBE6E4",    
    },


    headerTxt: {

        fontSize: 25,
        fontWeight: "bold",
        
        paddingStart: 10,
    },
    
    root: {
        
        flex: 1,
        justifyContent: "center",
    }
})