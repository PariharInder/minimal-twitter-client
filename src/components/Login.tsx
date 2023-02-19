import { useState } from 'react'

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form action="" method="post">
                <fieldset>
                    <input type="text" placeholder="Enter username"/>
                </fieldset>
                <fieldset>
                    <input type="password" placeholder="Password"/>
                </fieldset>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}