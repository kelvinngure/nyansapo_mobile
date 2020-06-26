import React from "react"
import DrawerNav from "../navigation/DrawerNav"
import {View} from "react-native"
import styles from "../styles/styles"
import {LineContext, LineProvider, LineConsumer} from "../contexts/LineContext"
import Auth from "./Auth"

const MainApp = () => {
  return (
    <View style ={styles.mainapp}>
      <LineConsumer>
        {state => state.line ? <DrawerNav/> : <Auth/>} 
      </LineConsumer>
    </View>
  )
}

export default MainApp