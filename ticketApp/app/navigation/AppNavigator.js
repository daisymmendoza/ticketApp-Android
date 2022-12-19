import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TicketScreen from '../screens/TicketScreen';
import AccountScreen from '../screens/AccountScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Concerts "
            component={FeedNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, size }) => <MaterialCommunityIcons name="home" size={size} color={focused ? '#759B7D' : 'grey'}/>,
                tabBarLabelStyle: {
                    fontSize: 15
                }}
            }
        />
        <Tab.Screen
            name="Tickets"
            component={TicketScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, size }) => <MaterialCommunityIcons name="ticket" size={size} color={focused ? '#759B7D' : 'grey'}/>,
                tabBarLabelStyle: {
                    fontSize: 15
                }
            }}
        />
        <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, size }) => <MaterialCommunityIcons name="account" size={size} color={focused ? '#759B7D' : 'grey'}/>,
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarStyle: {
                    justifyContent: 'center'
                }
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;