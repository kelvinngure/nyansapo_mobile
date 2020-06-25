import React from "react"
import { View, Text } from "react-native"
import styles from "../../styles/styles"
import Icon from "../../styles/Icons"
import {IconBar, Search, Menu, Add} from "../../styles/Icons"
import { NavigationContainer } from "@react-navigation/native"
import { TouchableOpacity } from "react-native-gesture-handler"

const Header = ({navigation}) => {
    return(
        <View style = {styles.header}>
            <Menu/>
            <Text style = {styles.headerText}>nyansapo</Text>

            <View style = {styles.icons}>
                <TouchableOpacity onPress = {() => navigation.navigate("Create")}><Add /></TouchableOpacity>
                <Search />
            </View>
        </View>
    )
    
}

export default Header

