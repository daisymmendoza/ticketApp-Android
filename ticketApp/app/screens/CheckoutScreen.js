import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import colorScheme from '../config/colorScheme';

function HomeScreen({ route }) {
    const smallMap = route.params;

    var price = Number(smallMap.ticketPrice) * Number(smallMap.plainAmount);
    var fees = Number(smallMap.ticketPrice)/4;
    var finalFees = fees * Number(smallMap.plainAmount);
    fees = fees.toFixed(2);
    var total = Number(price) + Number(finalFees);
    
    return (
        <ScrollView style={styles.screen}>
                <View style={styles.container}>
                    <Text style={[styles.header, styles.artist]}>{smallMap.ticketArtist}</Text>
                    <Text style={styles.date}>{smallMap.ticketDate}</Text>
                    <Text style={styles.location}>{smallMap.ticketLocation}</Text>
                </View>

                <View style={[styles.container, styles.payContainer]}>
                    <Text style={styles.header}>Payment</Text>
                    <Text style={styles.payment}>VISA ending in 1234</Text>
                </View>
                
                <View style={styles.container}>
                    <View style={styles.qntyContainer}>
                        <Text style={styles.header}>Quantity</Text>
                        <Text style={styles.ticketAmount}>{smallMap.ticketAmount}</Text>
                    </View>

                    <View style={styles.dlvryContainer}>
                        <Text style={styles.header}>Delivery</Text>
                        <View>
                            <Text style={styles.dlvryTxt}>Mobile Transfer</Text>
                            <Text style={styles.dlvrySubtxt}>Tickets will be transferred outside of TicketVerse to your contact email</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.pricingContainer}>
                        <Text style={styles.subHeader}>
                            Price <Text style={styles.priceBreakdown}>({smallMap.plainAmount} x ${smallMap.ticketPrice} {smallMap.priceContinued})</Text>
                        </Text>
                        <Text style={styles.ticketPrice}>${price}</Text>
                    </View>

                    <View style={styles.pricingContainer}>
                        <Text style={styles.subHeader}>
                            Fees <Text style={styles.priceBreakdown}>({smallMap.plainAmount} x ${fees} {smallMap.priceContinued})</Text>
                        </Text>
                        <Text style={styles.ticketPrice}>${finalFees}</Text>
                    </View>
                    
                    <View style={styles.pricingContainer}>
                        <Text style={styles.subHeader}>Total</Text>
                        <Text style={styles.ticketPrice}>${total}</Text>
                    </View>
                </View>

                <Text style={styles.terms}>By purchasing a ticket, you agree to have an account with TicketVerse and be bound to the Terms of Use and Privacy Policy</Text>

                <TouchableOpacity style={styles.payBtn}>
                    <Text style={styles.payTxt}>Pay</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        padding: 20,
        borderBottomColor: colorScheme.lighterGrey,
        borderBottomWidth: 1
    },
    header: {
        color: colorScheme.primary,
        fontSize: 20,
        fontWeight: '500',
        marginRight: 20
    },
    artist: {
        marginBottom: 5
    },
    date: {
        color: colorScheme.lightGrey,
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 5
    },
    location: {
        color: colorScheme.lightGrey,
        fontSize: 15
    },
    payContainer: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    payment: {
        color: colorScheme.lightGrey,
        fontSize: 20,
        alignSelf: 'center'
    },
    qntyContainer: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    ticketAmount: {
        color: colorScheme.lightGrey,
        fontSize: 20,
        alignSelf: 'center'

    },
    dlvryContainer: {
        flexDirection: 'row'
    },
    dlvryTxt: {
        color: colorScheme.lightGrey,
        fontSize: 20
    },
    dlvrySubtxt: {
        color: colorScheme.lightGrey,
        fontSize: 15,
        width: 300
    },
    pricingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    subHeader: {
        color: colorScheme.primary,
        fontSize: 17,
        fontWeight: '500'
    },
    ticketPrice: {
        color: colorScheme.primary,
        fontSize: 17
    },
    priceBreakdown: {
        color: colorScheme.lightGrey,
        fontWeight: '400'
    },
    terms: {
        color: colorScheme.lightGrey,
        padding: 20,
        alignSelf: 'center'
    },
    payBtn: {
        width: "70%",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 25,
        height: 55,
        marginTop: 20,
        backgroundColor: colorScheme.primary,
    },
    payTxt: {
        fontSize: 25,
        color: 'white',
        textAlign: "center"
    }
})

export default HomeScreen;