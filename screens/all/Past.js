import React from "react"
import { Text } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// stacks: start assessment
//          // past assessment 
//          // 



const Past = () => {
    return (
        // <Stack.Navigator>
        //     <Stack.Screen name="Start" component={Start} options={{headerShown: false}}/>
        //     <Stack.Screen name="Past" component={Past} options={{headerShown: false}} />
        // </Stack.Navigator>
        <Text>Past Assesments</Text>
    )
}

export default Past
