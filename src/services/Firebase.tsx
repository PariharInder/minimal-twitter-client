import { initializeApp } from 'firebase/app';

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtZeoqPrOf-DOAw3DOzxnPSWfN6ldnATE",
    authDomain: "minimal-twitter-d2dc2.firebaseapp.com",
    projectId: "minimal-twitter-d2dc2",
    storageBucket: "minimal-twitter-d2dc2.appspot.com",
    messagingSenderId: "963857604715",
    appId: "1:963857604715:web:fe19b211e07fed4b05d12e",
    measurementId: "G-D8BLNNK6TC"
  }

export const app = initializeApp(firebaseConfig);

export default function FirebaseApp() {
  return null;
}