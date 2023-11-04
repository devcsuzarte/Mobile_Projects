import { StyleSheet, Platform } from "react-native";


export const s = StyleSheet.create({
    

    root: {
        backgroundColor: "white",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        
        marginVertical: 6,
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,

    },

    icon: {

        


    },

    info: {

    },

    id: {

        marginLeft: 70,
        padding: 7,
        borderRadius: Platform.OS == 'ios' ? "10" : 10,
        

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


})