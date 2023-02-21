import { useState } from 'react'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import { app } from './services/Firebase'
import { getAuth } from 'firebase/auth'
import Index from './pages/Index'
import Auth from './pages/Auth'
import Feed from './pages/Feed'
import { AuthContext } from './components/Login'
import './styles/tailwind.css'

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


// Initialize Firebase
const auth = getAuth(app)

const [loggedIn, setLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
    <div className="bg-neutral-900 fixed inset-0">
      <RouterProvider router={router} />
    </div>
    </AuthContext.Provider>
  )
}

export default App
