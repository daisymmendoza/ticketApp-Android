import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import colorScheme from '../config/colorScheme';

function Card({artist, price, image, details, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <ImageBackground style={styles.image} source={image}>
                    <View style={styles.txtContainer}>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.artist}>{artist}</Text>
                        <Text style={styles.details}>{details}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: "flex-end",
    },
    txtContainer: {
        padding: 10
    },
    artist: {
        color: 'white',
        fontSize: 20
    },
    price: {
        width: 45,
        color: colorScheme.lightGrey,
        fontWeight: "bold",
        backgroundColor: colorScheme.primary,
        textAlign: 'center',
        color: 'white',
        padding: 3,
        borderRadius: 7,
        overflow: 'hidden',
        marginBottom: 5,
    },
    details: {
        color: colorScheme.lighterGrey
        // fontSize: 15
    }
})

export default Card;