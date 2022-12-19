import React from 'react';
import { Image, View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import colorScheme from '../config/colorScheme';

function ConcertDetails({ mapImage, ticketPrice, priceContinued, ticketAmount, ticketDetails, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.listing1}>
                <Image style={styles.listingImage1} source={mapImage}/>
                    <View>
                        <Text style={styles.priceContainer}>
                            <Text style={styles.price}>{ticketPrice}</Text>
                            <Text style={styles.priceContinued}> {priceContinued}</Text>
                        </Text>
                        <Text style={styles.ticketDetails}>{ticketAmount}</Text>
                        <Text style={styles.ticketDetails}>{ticketDetails}</Text>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    listing1: {
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 0
    },
    listingImage1: {
        width: '30%',
        height: 100,
        backgroundColor: colorScheme.primary,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginRight: 10
    },
    priceContainer: {
        marginTop: 5
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    priceContinued: {
        fontSize: 17
    },
    ticketDetails: {
        color: colorScheme.lightGrey,
        marginVertical: 1
    }
})

export default ConcertDetails;