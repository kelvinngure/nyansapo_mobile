import React, {useState} from "react"
import { View, Text } from "react-native"
import styles from "../../styles/styles"
import { createStackNavigator } from '@react-navigation/stack';
import Header from "./Header"
import History from "./History"
import CreateStudent from "./CreateStudent";
import { SearchBar } from 'react-native-elements';


const Stack = createStackNavigator();

const HomeTab = ({navigation}) => {
    const [search, setSearch] = useState("dsd")

    const updateSearch = (text) => {
      setSearch(text)
    }

    const sendSearch = () => {
      console.log(search)
    }

    return(
        <View style = {styles.homeCombine}>
             <SearchBar
                  placeholder="Search for student..."
                  onChangeText={(text) => updateSearch(text)}
                  value={search}
                  onSubmitEditing = {sendSearch}
                  platform = "android"
              />
            <History navigation = {navigation}/>
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
