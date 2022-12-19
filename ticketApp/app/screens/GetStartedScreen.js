import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colorScheme from '../config/colorScheme';

function GetStartedScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require("../assets/concertBackground.png")}
        >
            <View style={styles.txtContainer}>
                <Text style={styles.brand}>TicketVerse</Text>
                <Text style={styles.subTxt}>Concert tickets at your fingertips</Text>
            </View>
            <TouchableOpacity style={styles.getStartedBtn} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.btnTxt}>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    txtContainer: {
        position: 'absolute',
        top: 180,
        alignItems: 'center'
    },
    brand: {
        color: 'white',
        fontSize: 50
    },
    subTxt: {
        color: 'white',
        fontSize: 25
    },
    getStartedBtn: {
        width: '70%',
        alignSelf: 'center',
        height: 60,
        backgroundColor: colorScheme.primary,
        bottom: 130,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        fontSize: 27,
        color: "white"
    }
})

export default GetStartedScreen;