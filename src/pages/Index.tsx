import { useState } from 'react'
import '../styles/skeleton.css'

export default function Index() {
    return (
        <div className="container">
            <h1>Welcome to Minimal Twitter</h1>
            <h3><u>A twitter for the simple ones</u></h3>
            <a href="/auth" className="button">Register / Login</a>
        </div>
      )
}
