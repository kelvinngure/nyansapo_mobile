import React from "react"
import { View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

const IconBar = () => {
    return(
        <View>
            <Icon name="logo-python" size={40} color="#094719"/>
        </View>
    )
}

const Search = () => {
    return(
        <View>
            <Icon name="md-search" size={40} color="#094719"/>
        </View>
    )
}

const Menu = () => {
    return(
        <View>
            <Icon name="md-menu" size={40} color="#094719"/>
        </View>
    )
}

const Add = () => {
    return(
        <View>
            <Icon name="md-add" size={40} color="#094719"/>
        </View>
    )
}


export {
    IconBar,
    Search,
    Menu,
    Add
}



//<Icon ios="ios-add" android="md-add" />