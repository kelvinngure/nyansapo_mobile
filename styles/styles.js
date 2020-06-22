import React from "react"
import { StyleSheet, StatusBar } from "react-native"
import Colors from "./Colors"

export default StyleSheet.create({
    mainapp: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    tabs: {
        flex: 1,
        paddingLeft: 16
    },
    header: {
        height: 60,
        paddingLeft: 10,
        paddingTop: 12,
        borderBottomColor: "#d6d6d6",
        borderBottomWidth: 1,
        backgroundColor: "#fcfcfc",
        flexDirection: "row"
    },
    headerText: {
        fontSize: 25,
        color: Colors.blue,
        paddingLeft: 8,
    },
    snake: {
        paddingRight: 140
    },
    history: {
        paddingLeft: 16
    },
    icons: {
        justifyContent: "space-between",
        width: 70,
        flexDirection: "row"
    }
})