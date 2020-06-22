import React from "react"
import { View, Text } from "react-native"
import styles from "../../styles/styles"
import { TouchableOpacity } from "react-native-gesture-handler"
import Header from "./Header"
import History from "./History"


const Home = () => {
    return(
        <View styles = {styles.tabs}>
            <Header />
            <History />
        </View>
    )
}



export default Home
