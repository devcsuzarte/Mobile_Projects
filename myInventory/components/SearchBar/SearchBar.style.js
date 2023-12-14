import { StyleSheet } from "react-native"

export const s = StyleSheet.create({

    root: {
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

    avatar: {

        width: 50,
        height: 50,
        borderRadius: 50,

    }



    

})