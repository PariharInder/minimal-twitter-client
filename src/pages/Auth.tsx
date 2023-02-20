import { useState } from 'react'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import '../styles/skeleton.css'

export default function Auth() {
    return (
        <div className="container">
            <Register />
            <Login />
        </div>
    )
}