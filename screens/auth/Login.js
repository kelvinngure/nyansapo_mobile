import React, {useContext} from "react"
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import styles from "../../styles/styles"
import Colors from "../../styles/Colors"




const Login = ({navigation}) => {

    return (
        <View style = {styles.loginScreen}>
            <View style = {styles.logoView}>
                <Image source = {require("../../assets/logo.png")} style = {styles.authlogo}/>
            </View>
            <View style = {styles.inputView}>
                <TextInput style = {styles.authInputs} placeholder ="email" placeholderTextColor={Colors.appBrown}></TextInput>
                <TextInput style = {styles.authInputs} placeholder ="password" placeholderTextColor={Colors.appBrown} secureTextEntry= {true}></TextInput>
            </View>
            <View style = {styles.authButtonView}>
                <TouchableOpacity style = {styles.forgot}>
                    <Text style = {styles.authButtonText}>forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.authButton}>
                    <Text style = {styles.signin}>sign in</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress = {() => navigation.navigate("Register")} >
                <Text>CREATE ACCOUNT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login