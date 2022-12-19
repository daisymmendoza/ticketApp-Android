import { Text, SafeAreaView, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import colorScheme from "../config/colorScheme";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/core'
import { auth } from '../../firebase';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert('Invalid email and/or password'))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

        <View style={styles.inputView}> 
          <TextInput
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              placeholderTextColor="#759B7D"
          />
        </View>

        <View style={styles.inputView}> 
          <TextInput
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              placeholderTextColor="#759B7D"
              secureTextEntry
          />
        </View>

    <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}>
            <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        color: colorScheme.primary,
        fontSize: 45,
        fontWeight: '400',
        marginTop: 80,
        marginVertical: 70,
    },
    inputView: {
        borderBottomWidth: 2,
        borderBottomColor: colorScheme.primary,
        width: "70%",
        height: 45,
        marginBottom: 30
    },
    input: {
        height: 50,
        fontSize: 17,
        color: colorScheme.primary
    },
    errorMes: {
        marginTop: -15,
        marginBottom: 5
    },
    btnContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    loginBtn: {
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        height: 55,
        marginTop: 50,
        backgroundColor: colorScheme.primary,
    },
    loginText: {
        fontSize: 25,
        color: 'white',
        textAlign: "center"
    },
    signupBtn: {
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        height: 55,
        marginTop: 20,
        borderColor: colorScheme.primary,
        borderWidth: 2
    },
    signupText: {
        fontSize: 25,
        color: colorScheme.primary,
        textAlign: "center"
    }
})