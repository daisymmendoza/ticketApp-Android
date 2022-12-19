import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import GetStartedScreen from './app/screens/GetStartedScreen';
import LoginScreen from './app/screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import navigationTheme from './app/navigation/navigationTheme';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TicketScreen from './app/screens/TicketScreen';
import AccountScreen from './app/screens/AccountScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './app/navigation/FeedNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen
            name="Get Started"
            component={GetStartedScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0
                },
                title: ''
            }}
        />

        <Stack.Screen
            name="Home"
            component={AppNavigator}
            options={{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0
                },
                headerShown: false
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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