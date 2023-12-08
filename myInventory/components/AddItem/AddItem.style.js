import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {

        margin: 15,

    },

    title: {

        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",

        marginBottom: 15,
    },

    inputView: {

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,


        marginBottom: 15,
        padding: 15,
        backgroundColor: "white",

        borderRadius: 8,

    },

    inputTxt: {

        fontSize: 18,
        paddingBottom: 10,


    },

    registerBtn: {

        backgroundColor: "#4287f5",
        padding: 20,

        borderRadius: 8,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        
    },

    btnText: {

        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
    },

    
})