import React from "react"
import { View, Text } from "react-native"
import styles from "../../styles/styles"
import Icon from "../../styles/Icons"
import {IconBar, Search, Menu, Add} from "../../styles/Icons"

const Header = () => {
    return(
        <View style = {styles.header}>
            <Menu/>
            <Text style = {styles.headerText}>nyansapo</Text>
            <View style ={styles.snake}>
            <IconBar  style ={styles.snake}/>
            </View>

            <View style = {styles.icons}>
            <Add/>
            <Search />
            </View>
        </View>
    )
    
}

export default Header

