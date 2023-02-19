import { useState } from 'react'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import Index from './pages/Index'
import Auth from './pages/Auth'
import './styles/skeleton.css'
import Feed from './pages/Feed'

function App() {

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

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
