import { useState } from 'react'

export default function Register() {
    return (
        <div>
            <h1>Register</h1>
            <form action="" method="post">
                <fieldset>
                    <input type="text" placeholder="Enter username"/>
                </fieldset>
                <fieldset>
                    <input type="password" placeholder="Password"/>
                </fieldset>
            </form>
        </div>
    )
}