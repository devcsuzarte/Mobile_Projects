import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { auth, handleSingUp, handleSingIn } from "../../firebase";


export function LoginScreen({ navigation }) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {

      const unsubscribe =  auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home');
            }
        })

        return unsubscribe;
    }, []);

    const singUp = () => {

        handleSingUp(email, password);
    }

    const singIn = () => {

        console.log(handleSingIn(email, password));
    }

    return (

        <View>
            <View>
                <TextInput
                    placeholder="Email"
                    value = {email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    placeholder="Password"
                    value = {password}
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <View>
                <TouchableOpacity
                    onPress={singIn}
                >
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={singUp}
                >
                    <Text>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>


        </View>


    )
}