import 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useReducer, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainApp from "./components/MainApp"
import { getToken, deleteToken, storeRefreshToken} from "./actions/TokenHandle"
import {LineContext, LineProvider, LineConsumer} from "./contexts/LineContext"
import Colors from "./styles/Colors"

let initialState = {
  line: true,
  token: null,
  user: null
}

export default function App() {
  return (
    <NavigationContainer>
      <View style = {styles.container}>
        <LineProvider value= {initialState}>
          <MainApp/>
        </LineProvider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appLightBrown
  },
});
