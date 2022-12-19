import React from 'react';
import ConcertScreen from '../screens/ConcertScreen';
import ConcertDetailsScreen from '../screens/ConcertDetailsScreen';
import ConcertTicketScreen from '../screens/ConcertTicketScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import { createStackNavigator } from '@react-navigation/stack';
import colorScheme from '../config/colorScheme';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Concerts"
            component={ConcertScreen}
            options={{
                headerShown: false
            }}
        />
        
        <Stack.Screen
            name="ConcertDetails"
            component={ConcertDetailsScreen}
            options={({ route }) => ({
                title: route.params.artist,
                headerTitleStyle: {
                    color: colorScheme.primary,
                    fontSize: 20
                },
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0
                },
            })}
        />

        <Stack.Screen
            name="Ticket"
            component={ConcertTicketScreen}
            options={{
                headerShown: true,
                headerTitleStyle: {
                    color: colorScheme.primary,
                    fontSize: 20
                },
            }}
        />

        <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{
                headerShown: true,
                headerTitleStyle: {
                    color: colorScheme.primary,
                    fontSize: 20
                },
            }}
        />
    </Stack.Navigator>
);

export default FeedNavigator;