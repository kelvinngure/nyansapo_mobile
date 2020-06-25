import React from "react"
import { View, Text } from "react-native"
import styles from "../../styles/styles"
import { createStackNavigator } from '@react-navigation/stack';
import Header from "./Header"
import History from "./History"
import CreateStudent from "./CreateStudent";

const Stack = createStackNavigator();

const HomeTab = ({navigation}) => {
    return(
        <View>
            <Header navigation = {navigation} />
            <History />
        </View>
    )
}



function Home({navigation}) {
  return (
    <Stack.Navigator screenOptions={{animationEnabled: false}}>
        <Stack.Screen name="Home" component={HomeTab} options={{headerShown: false}}/>
        <Stack.Screen name="Create" component={CreateStudent}  options={{headerShown: false}}/>
    </Stack.Navigator>
    
  );
}




export default Home
