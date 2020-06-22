import React from "react"
import { View, Text } from "react-native"
import styles from "../../styles/styles"


const Searched = () => {
    return(
        <View>
            <Text>Result</Text>
        </View>
    )
}

const History = () => {
    return(
        <View style = {styles.history}>
            <Searched />
            <Searched />
            <Searched />

        </View>
    )
    
}

export default History