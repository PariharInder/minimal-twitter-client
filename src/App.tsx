import { useState } from 'react'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import Index from './pages/Index'
import Auth from './pages/Auth'
import './styles/skeleton.css'
import Feed from './pages/Feed'

function App() {

  //Initializing the router for web-app
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/feed",
      element: <Feed />
    }
  ])


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


// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
