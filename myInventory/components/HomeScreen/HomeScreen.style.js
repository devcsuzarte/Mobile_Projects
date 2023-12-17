import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    search: {
        marginTop: 35,
        padding: 10,
        margin: 15,
        borderRadius: 20,

        backgroundColor: "white", 

        flexDirection: "row",
        justifyContent: "center",
       


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },

    txtInput: {

        flex: 1,
        paddingLeft: 10,

    },

    root: {
        height: "100%",
        backgroundColor: "green",
    },

    btn: {


        backgroundColor: "black"

    },

    btnTxt: {
        
        
    },
    
})