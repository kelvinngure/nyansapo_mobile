import React from "react"
import {Text, View} from "react-native"
import styles from "../../styles/styles"

const CreateStudent = () => {
    return(
        <View>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>Add student profile</Text>
            </View>
            <View style = {styles.tabs}>
                <Text> Name </Text>
            </View>
        </View>
    )
}

export default CreateStudent;