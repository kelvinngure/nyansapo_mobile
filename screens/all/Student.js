import React from "react"
import { Text, View } from "react-native"
import styles from "../../styles/styles"
import Start from "./Start"
import Past from "./Past"
// import Start from "./Start"
// import Past from "./Past"

// stacks: start assessment
//          // past assessment 
//          // 



const Student = () => {
    return (
       <View style = {styles.student}>
           <View style = {styles.header}>
            </View>
            <View style = {styles.studentTab}>
                <Start/>
                <Past/>
            </View>
        </View>
    )
}

export default Student
