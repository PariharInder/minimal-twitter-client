import { useState } from 'react'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import Index from './pages/Index'
import Auth from './pages/Auth'
import './styles/skeleton.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/auth",
      element: <Auth />,
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
