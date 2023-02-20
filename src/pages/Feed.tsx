import { useContext, useState } from 'react'
import { AuthContext } from '../components/Login'
import Post from '../components/Post'
import Auth from './Auth'

export default function Feed() {

    const { loggedIn } = useContext(AuthContext)

    return (
        <>
        {loggedIn ? (
            <div>
            <h1>Feed</h1>
            <Post />
        </div>
        ) : (
            <><p>You are not logged In</p><Auth /></>
        )}
        </>
    )
}