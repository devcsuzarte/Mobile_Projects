import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {
        backgroundColor: "white",  

        marginTop: 35,
        margin: 15,
        padding: 10,
        borderRadius: 10,
       
        flexDirection: "row",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
},
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,    

    },

    info: {

        flexDirection: "row",
        alignContent: "center",

        paddingLeft: 10,
        
        

    },

    itemName: {

    },

    units: {
        backgroundColor: "gray",
        alignItems: "center",
        alignSelf: "flex-end",

    },

    
})