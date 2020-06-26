import React from "react"
import {Text, View, TextInput, TouchableOpacity} from "react-native"
import styles from "../../styles/styles"

const CreateStudent = () => {
    return(
        <View>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>Add student profile</Text>
            </View>
            <View style = {styles.tabs}>
                <Text style = {styles.createStudentText}>First name</Text> 
                <TextInput style = {styles.authInputs}/>
                <Text style = {styles.createStudentText}>Middle name</Text> 
                <TextInput style = {styles.authInputs}/>
                <Text style = {styles.createStudentText}>Last name</Text> 
                <TextInput style = {styles.authInputs}/>
                <Text style = {styles.createStudentText}>Age</Text> 
                <TextInput style = {styles.authInputs}/>
                <Text style = {styles.createStudentText}>Additional notes</Text> 
                <TextInput style = {styles.authInputs}/>
                <View style = {styles.authButtonView}>
                <TouchableOpacity style = {styles.registerButton}><Text style = {styles.signin}>create student</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CreateStudent;