import React from "react"
import BottomTab from "../navigation/BottomTab"
import {View} from "react-native"
import styles from "../styles/styles"
import {LineContext, LineProvider, LineConsumer} from "../contexts/LineContext"
import Auth from "./Auth"

const MainApp = () => {
  return (
    <View style ={styles.mainapp}>
      <LineConsumer>
        {state => state.line ? <BottomTab/> : <Auth/>}
      
      </LineConsumer>
    </View>
  )
}

export default MainApp