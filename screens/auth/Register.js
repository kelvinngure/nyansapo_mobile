import React, {useContext} from "react"
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import styles from "../../styles/styles"
import Colors from "../../styles/Colors"


const Register = ({navigation}) => {

    return (
        <View style = {styles.loginScreen}>
            <View style = {styles.logoView}>
                <Image source = {require("../../assets/logo.png")} style = {styles.authlogo}/>
            </View>
            <View style = {styles.inputView}>
                <View style = {styles.nameinput}>
                    <TextInput style = {styles.names} placeholder ="first name" placeholderTextColor={Colors.appBrown}></TextInput>
                    <TextInput style = {styles.names} placeholder ="last name" placeholderTextColor={Colors.appBrown} secureTextEntry= {true}></TextInput>
                </View>
                <TextInput style = {styles.authInputs} placeholder ="email" placeholderTextColor={Colors.appBrown} secureTextEntry= {true}></TextInput>
                <TextInput style = {styles.authInputs} placeholder ="password" placeholderTextColor={Colors.appBrown} secureTextEntry= {true}></TextInput>
            </View>
            <View style = {styles.authButtonView}>
                <TouchableOpacity style = {styles.registerButton}>
                    <Text style = {styles.signin}>create account</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress = {() => navigation.navigate("Login")} >
                <Text>LOGIN INSTEAD?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register