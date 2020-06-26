import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from "./BottomTab"
import StudentStack from "../screens/drawer/StudentStack"

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNav({navigation}) {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomTab}  options={{headerShown: false}}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen}  options={{headerShown: false}}/>
        <Drawer.Screen name="MyStudents" component={StudentStack}  options={{headerShown: false}}/>
      </Drawer.Navigator>
  );
}