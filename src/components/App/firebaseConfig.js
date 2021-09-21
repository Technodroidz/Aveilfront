// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhGjwRm3kJCShgJBY-Os-ZTayVt2rGMu8',
  authDomain: 'aveil-chatbot.firebaseapp.com',
  projectId: 'aveil-chatbot',
  storageBucket: 'aveil-chatbot.appspot.com',
  messagingSenderId: '743129758042',
  appId: '1:743129758042:web:daaeae61269703ae7f1b63',
  measurementId: 'G-X18J4JSJFD',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
