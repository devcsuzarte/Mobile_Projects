import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {

        marginVertical: 15,
        marginHorizontal: 20,

        
        
    },

    info: {
        backgroundColor: "white",

        flexDirection: "row",
        alignItems: "center",

        justifyContent: "space-evenly",
        
        padding: 20,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
        
        
    },

    id: {
        
        padding: 15,
    
        backgroundColor: "#33B2FF",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },


    selectLevel: {

        marginVertical: 20,
        padding: 20,

        backgroundColor: "white",

        borderBottomWidth: 0.5,
        borderBottomColor: "gray"

        
    },

    txtInputView: {
   

    },

    title: {

        fontSize: 20, 
        marginHorizontal: 10,
        padding: 10,
    
    },

    txtInput: {
       
       padding: 10,
       backgroundColor: "white",
       height: 100,
       
    }
})