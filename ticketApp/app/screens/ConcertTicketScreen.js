import React from "react";
import { View, Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import colorScheme from "../config/colorScheme";

function ConcertTicketScreen({ route, navigation }) {
    const smallMap = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={smallMap.mapImage}/>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.price}>
                        ${smallMap.ticketPrice} <Text style={styles.price}>{smallMap.priceContinued}</Text>
                    </Text>
                    <Text style={styles.amount}>{smallMap.ticketAmount}</Text>
                    <Text style={styles.details}>{smallMap.ticketDetails}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.infoHeader, styles.infoTxtHeader]}>{smallMap.ticketArtist}</Text>
                    <Text style={styles.infoTxt}>{smallMap.ticketDate}</Text>

                    <Text style={styles.infoHeader}>Get in with your phone</Text>

                    <Text style={[styles.infoHeader, styles.infoTxtHeader]}>Buyer Guarenteed Protected</Text>
                    <Text style={styles.infoTxt}>Every ticket is protected. if your event gets canceled, we'll make it right.</Text>
                </View>

                <View style={styles.quantityContainer}>
                    <Text style={styles.quantityTxt}>Quantity</Text>
                    <Text style={styles.amountTxt}>{smallMap.ticketAmount}</Text>
                </View>

                <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate("Checkout", smallMap)}>
                    <Text style={styles.continueTxt}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        height: 300,
        backgroundColor: colorScheme.primary,
        justifyContent: 'center'
    },
    image: {
        width: 320,
        height: 280,
        alignSelf: 'center'
    },
    price: {
        color: 'black',
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 3
    },
    amount: {
        color: colorScheme.lightGrey,
        fontSize: 17,
        marginBottom: 3
    },
    details: {
        color: colorScheme.lightGrey,
        fontSize: 17,
        marginBottom: 0
    },
    detailsContainer: {
        padding: 20,
        borderBottomColor: colorScheme.lighterGrey,
        borderBottomWidth: 2
    },
    infoContainer: {
        padding: 20,
        marginBottom: 10
    },
    infoHeader: {
        color: colorScheme.primary,
        fontWeight: '500',
        fontSize: 20,
        marginBottom: 20
    },
    infoTxtHeader: {
        marginBottom: 3
    },
    infoTxt: {
        color: colorScheme.lightGrey,
        fontSize: 17,
        marginBottom: 20
    },
    quantityContainer: {
        width: "70%",
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent:"space-between",
        borderRadius: 25,
        height: 45,
        borderColor: colorScheme.primary,
        borderWidth: 2
    },
    quantityTxt: {
        fontSize: 20,
        color: colorScheme.primary,
        alignSelf: "center",
        paddingLeft: 20
    },
    amountTxt: {
        fontSize: 20,
        color: colorScheme.primary,
        alignSelf: "center",
        paddingRight: 20
    },
    continueBtn: {
        width: "70%",
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        height: 55,
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: colorScheme.primary,
    },
    continueTxt: {
        fontSize: 25,
        color: 'white',
        textAlign: "center"
    }
});

export default ConcertTicketScreen;