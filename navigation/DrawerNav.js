import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from "./BottomTab"

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
      <Drawer.Navigator initialRouteName="Btab">
        <Drawer.Screen name="Home" component={BottomTab}  options={{headerShown: false}}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen}  options={{headerShown: false}}/>
      </Drawer.Navigator>
  );
}