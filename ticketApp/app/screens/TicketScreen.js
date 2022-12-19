import React from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableWithoutFeedback, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Concerts")}>
                <Image
                    style={styles.image}
                    source={require("../assets/BrowseConcerts.png")}
                />
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 15
    }
})

export default HomeScreen;