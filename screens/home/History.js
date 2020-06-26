import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import styles from "../../styles/styles"
import {IconBar, Search, Menu, Add} from "../../styles/Icons"



const Searched = () => {
    return(
        <View>
            <Text>Resu</Text>
        </View>
    )
}

const History = ({navigation}) => {
    return(
        <View style = {styles.hometab}>
            <View style = {styles.results}>
                <Searched />
                <Searched />
                <Searched />
            </View>
            
            <View style = {styles.icons}>
                <TouchableOpacity onPress = {() => navigation.navigate("Create")}><Add /></TouchableOpacity>
            </View>

        </View>
    )
    
}

export default History