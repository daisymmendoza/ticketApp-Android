// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJUOIQGOETzjNtX0o8DwihEXKyl9ZYTHM",
    authDomain: "ticketapp-auth.firebaseapp.com",
    projectId: "ticketapp-auth",
    storageBucket: "ticketapp-auth.appspot.com",
    messagingSenderId: "492820347923",
    appId: "1:492820347923:web:082da00903a427707693e6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };