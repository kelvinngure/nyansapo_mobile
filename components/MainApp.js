import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from "../navigation/BottomTab"
import DrawerNav from "../navigation/DrawerNav"
import {View} from "react-native"
import styles from "../styles/styles"

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <View style ={styles.mainapp}>
      <DrawerNav/>
    </View>
  )
}

export default MainApp