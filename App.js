import 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainApp from "./components/MainApp"


export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  useEffect(() => {
     async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          Ionicons: require('@expo/vector-icons/Ionicons'),
        });
        
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <NavigationContainer>
      <View style = {styles.container}>
      <MainApp/>
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
