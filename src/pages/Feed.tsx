import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../components/Login'
import Post from '../components/Post'
import Auth from './Auth'

export default function Feed() {

    const { loggedIn } = useContext(AuthContext)
    const navigate = useNavigate()
    if(!loggedIn) {
        useEffect(() => {
            navigate('/auth')
          }, [navigate])
    }
    
    return (
            <div>
            <h1>Feed</h1>
            <Post />
        </div>
    )
}