import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ5Rk9uwO8GKLuQWRhe8bXagNMUzfwerQ",
  authDomain: "minimal-twitter-b4951.firebaseapp.com",
  projectId: "minimal-twitter-b4951",
  storageBucket: "minimal-twitter-b4951.appspot.com",
  messagingSenderId: "8743048304",
  appId: "1:8743048304:web:2c0d6bb72fcc6aae6150b5",
  measurementId: "G-EPKHHZRGJ1"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export default function FirebaseApp() {
  return null;
}