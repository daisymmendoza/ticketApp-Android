import { View, FlatList, SafeAreaView, StyleSheet, useColorScheme } from "react-native"
import { useNavigation } from '@react-navigation/core'
import ListItem from '../components/ListItem';
import colorScheme from '../config/colorScheme';
import Icon from '../components/Icon';
import Separator from '../components/Separator';
import { auth } from '../../firebase';

const menuItems = [
    {
        title: "Personal Information",
        icon: {
            name: "info",
            backgroundColor: colorScheme.lightGrey
        },
    },
    {
        title: "Help and Support",
        icon: {
            name: "question",
            backgroundColor: colorScheme.lightGrey
        }
    },
    {
        title: "Terms of Use",
        icon: {
            name: "filetext1",
            backgroundColor: colorScheme.lightGrey
        }
    }
]

function AccountScreen(props) {
    const navigation = useNavigation()

    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View>
                <ListItem
                    title={auth.currentUser?.email}
                    subTitle={auth.currentUser?.email}
                    image={require("../assets/defaultUser.png")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={Separator}
                    renderItem={({item}) => 
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                        />
                    }
                />
            </View>
            
                <View style={styles.logOut}>
                    <ListItem
                        onPress={handleSignOut}
                        title="Log Out"
                        IconComponent={
                            <Icon name="logout" backgroundColor= "#759B7D"/>
                        }
                    />
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white"
    },
    container: {
        marginTop: 15
    },
    logOut: {
        marginTop: 15
    }
})

export default AccountScreen;