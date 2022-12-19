import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Card from '../components/Card';
import { StatusBar } from 'react-native';

const listings = [
  {
    id: 1,
    artist: "Steve Lacy",
    price: 200,
    details: "Tue, Dec 6 at 7pm",
    image: require("../assets/SteveLacy.png"),
    bigMap: require("../assets/seatingMap.png"),
    totalListings: "124 Listings",
    smallMaps: [
        {
            id: 1,
            mapImage: require("../assets/seatingMap.png"),
            ticketArtist: "Steve Lacy",
            ticketDate: "Tue, Dec 6 at 7pm",
            ticketLocation: "Rialto Theatre, Tuscon, AZ",
            ticketPrice: 200,
            priceContinued: "each",
            ticketAmount: "2 tickets",
            plainAmount: 2,
            ticketDetails: "Section 332, Row 5"
        },
        {
            id: 2,
            mapImage: require("../assets/seatingMap.png"),
            ticketArtist: "Steve Lacy",
            ticketDate: "Tue, Dec 6 at 7pm",
            ticketLocation: "Rialto Theatre, Tuscon, AZ",
            ticketPrice: 235,
            priceContinued: "each",
            ticketAmount: "3 tickets",
            plainAmount: 3,
            ticketDetails: "Section 338, Row 3"
        },
        {
            id: 3,
            mapImage: require("../assets/seatingMap.png"),
            ticketArtist: "Steve Lacy",
            ticketDate: "Tue, Dec 6 at 7pm",
            ticketLocation: "Rialto Theatre, Tuscon, AZ",
            ticketPrice: 285,
            priceContinued: "each",
            ticketAmount: "3 tickets",
            plainAmount: 3,
            ticketDetails: "Section 236, Row 4"
        },
        {
            id: 4,
            mapImage: require("../assets/seatingMap.png"),
            ticketArtist: "Steve Lacy",
            ticketDate: "Tue, Dec 6 at 7pm",
            ticketLocation: "Rialto Theatre, Tuscon, AZ",
            ticketPrice: 315,
            priceContinued: "each",
            ticketAmount: "3 tickets",
            plainAmount: 3,
            ticketDetails: "Section 239, Row 9"
        }
    ],
    priceContinued: "each",
    ticketAmount: "2 tickets",
    ticketDetails: "Section 336, Row 7"
  },
  {
    id: 2,
    artist: "The Weeknd",
    price: 250,
    details: "Fri, Nov 18 at 6pm",
    image: require("../assets/TheWeeknd.png"),
    bigMap: require("../assets/seatingMap.png"),
    totalListings: "97 Listings",
    smallMaps: [
        {
            id: 1,
            mapImage: require("../assets/seatingMap.png"),
            ticketArtist: "The Weeknd",
            ticketDate: "Fri, Nov 18 at 6pm",
            ticketLocation: "State Farm Stadium, Glendale, AZ",
            ticketPrice: 250,
            priceContinued: "each",
            ticketAmount: "2 tickets",
            plainAmount: 2,
            ticketDetails: "Section 336, Row 7"
        },
        {
            id: 2,
            mapImage: require("../assets/seatingMap.png"),
            ticketArtist: "The Weeknd",
            ticketDate: "Fri, Nov 18 at 6pm",
            ticketLocation: "State Farm Stadium, Glendale, AZ",
            ticketPrice: 275,
            priceContinued: "each",
            ticketAmount: "3 tickets",
            plainAmount: 3,
            ticketDetails: "Section 340, Row 3"
        },
        {
            id: 3,
            mapImage: require("../assets/seatingMap.png"),
            ticketArtist: "The Weeknd",
            ticketDate: "Fri, Nov 18 at 6pm",
            ticketLocation: "State Farm Stadium, Glendale, AZ",
            ticketPrice: 315,
            priceContinued: "each",
            ticketAmount: "3 tickets",
            plainAmount: 3,
            ticketDetails: "Section 237, Row 9"
        },
        {
            id: 4,
            mapImage: require("../assets/seatingMap.png"),
            ticketArtist: "The Weeknd",
            ticketDate: "Fri, Nov 18 at 6pm",
            ticketLocation: "State Farm Stadium, Glendale, AZ",
            ticketPrice: 390,
            priceContinued: "each",
            ticketAmount: "3 tickets",
            plainAmount: 3,
            ticketDetails: "Section 240, Row 3"
        }
    ],
    priceContinued: "each",
    ticketAmount: "2 tickets",
    ticketDetails: "Section 336, Row 7"
  }
];

function ConcertScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
        <StatusBar barStyle = "light-content" hidden = {false}/>

        <View style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        artist={item.artist}
                        price={"$" + item.price}
                        image={item.image}
                        details={item.details}
                        onPress={() => navigation.navigate("ConcertDetails", item)}
                    />
                )}
            />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }
});

export default ConcertScreen;