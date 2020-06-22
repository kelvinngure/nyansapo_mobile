import React, {useContext} from "react"
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import styles from "../../styles/styles"


const Login = () => {

    return (
        <View style = {styles.loginScreen}>
            <View style = {styles.logoView}>
                <Image source = {require("../../assets/logo.png")} style = {styles.authlogo}/>
            </View>
            <View style = {styles.inputView}>
                <TextInput style = {styles.authInputs}></TextInput>
                <TextInput style = {styles.authInputs}></TextInput>
            </View>
            <View style = {styles.authButtonView}>
                <TouchableOpacity style = {styles.authButton}>
                    <Text style = {styles.authButtonText}>sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login