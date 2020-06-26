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
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    homeCombine: {
        flex: 1
    },
    hometab: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    results: {
        flex: 1
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
    history: {
        paddingLeft: 16
    },
    icons: {
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        flexDirection: "row",
        position: "absolute",
        right: 20,
        bottom: 20

    },
    loginScreen: {
        backgroundColor: Colors.appGrey,
        flex: 1,
        alignItems: "center"
    },
    authlogo: {
        width: "50%",
        height: "50%",
        resizeMode: "contain"
    },
    logoView: {
        width: "100%",
        height: "30%",
        alignItems: "center",
        backgroundColor: Colors.appLightBrown,
        justifyContent: "center"
    },
    inputView: {
        width: "100%",
        alignItems: "center",
        backgroundColor: Colors.appGrey,
        marginBottom: 30
    },
    authInputs: {
        height: 60,
        width: "90%",
        marginVertical: 20,
        fontSize: 18,
        borderBottomColor: Colors.appBrown,
        borderBottomWidth: 1
    },
    authButtonView: {
        flexDirection: "row",
        backgroundColor: Colors.appGrey,
        width: "100%",
        height: "20%",
        justifyContent: "center"
    },
    authButton: {
        backgroundColor: Colors.appBrown,
        height: 50,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5

    },
    registerButton: {
        backgroundColor: Colors.appBrown,
        height: 50,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    authButtonText: {
        color: Colors.appBrown,
        fontSize: 16
    },
    signin: {
        fontSize: 16,
        color: "white"
    },
    forgot: {
        backgroundColor: Colors.appGrey,
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: Colors.appBrown,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    nameinput: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16
    },
    names: {
        height: 60,
        width: "40%",
        marginVertical: 20,
        fontSize: 18,
        borderBottomColor: Colors.appBrown,
        borderBottomWidth: 1,
        paddingHorizontal: 16
    }
})