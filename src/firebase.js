// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCTOUrRJrNneLPewMVM0oYilxV_OTP3o-s',
  authDomain: 'ecommerce-system-d9004.firebaseapp.com',
  projectId: 'ecommerce-system-d9004',
  storageBucket: 'ecommerce-system-d9004.appspot.com',
  messagingSenderId: '1058509668882',
  appId: '1:1058509668882:web:3635ab55fe9b11a3368ecb',
  measurementId: 'G-DM8760HY8N',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app) // For user authentication
const db = getFirestore(app) // For Firestore database

export { auth, db }
