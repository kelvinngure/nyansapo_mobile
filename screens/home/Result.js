import React from "react"
import { Text, View } from "react-native"
import styles from "../../styles/styles"
import { TouchableOpacity } from "react-native-gesture-handler"

const Result= () => {
    return(
        <View style = {styles.result}>
            <TouchableOpacity style = {styles.resultbutton}>
                <Text style = {styles.resultText}>Result</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.resultxview}>
                <Text style = {styles.resultx}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Result