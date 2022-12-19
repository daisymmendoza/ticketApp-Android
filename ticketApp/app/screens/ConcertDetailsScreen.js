import React from "react";
import { View, Image, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import colorScheme from "../config/colorScheme";
import SmallMap from '../components/SmallMap';

function ConcertDetailsScreen({ route, navigation }) {
    const listing = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.concertTopInfo}>
                    <Text style={styles.date}>{listing.details}</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={listing.bigMap}/>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.totalListings}>{listing.totalListings}</Text>
            </View>
            <FlatList
                data={listing.smallMaps}
                keyExtractor={smallMap => smallMap.id.toString()}
                renderItem={({item}) => 
                    <SmallMap
                        mapImage={item.mapImage}
                        ticketArtist={item.ticketArtist}
                        ticketDate={item.ticketDate}
                        ticketLocation={item.ticketLocation}
                        ticketPrice={"$" + item.ticketPrice}
                        priceContinued={item.priceContinued}
                        ticketAmount={item.ticketAmount}
                        ticketDetails={item.ticketDetails}
                        onPress={() => navigation.navigate("Ticket", item)}
                    />
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    concertTopInfo: {
        marginTop: 0,
        paddingBottom: 7,
        paddingLeft: 65,
        alignSelf: "flex-start"
    },
    artist: {
        color: colorScheme.primary,
        fontSize: 20,
        fontWeight: '500'
    },
    date: {
        color: colorScheme.lightGrey,
        fontSize: 15
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
    detailsContainer: {
        padding: 20,
        borderBottomColor: colorScheme.lighterGrey,
        borderBottomWidth: 2
    },
    totalListings: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colorScheme.primary
    }
});

export default ConcertDetailsScreen;