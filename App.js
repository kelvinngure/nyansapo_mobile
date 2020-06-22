import 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect, useReducer, useState} from 'react';
import { StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainApp from "./components/MainApp"
import { getToken, deleteToken, storeRefreshToken} from "./actions/TokenHandle"
import {LineContext, LineProvider, LineConsumer} from "./contexts/LineContext"


let initialState = {
  line: false,
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
    backgroundColor: '#8ff55b',
  },
});
