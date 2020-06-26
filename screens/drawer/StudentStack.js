import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Student from "../all/Student"
import MyStudents from "../all/MyStudents"

const Stack = createStackNavigator();

const StudentStack = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{animationEnabled: false}}>
            <Stack.Screen name="MyStudents" component={MyStudents} options={{headerShown: false}}/>
            <Stack.Screen name="Student" component={Student} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default StudentStack



