import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styles from "../../styles/styles"

const MyStudents = ({navigation}) => {
    return(
    <View>
        <View style = {styles.header}>
            </View>
        <TouchableOpacity onPress = {() => navigation.navigate("Student")}>
            <Text>My students</Text>
        </TouchableOpacity>
    </View>
    )
}

export default MyStudents