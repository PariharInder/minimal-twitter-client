import { useState } from 'react'
import { LoginUser } from '../services/LoginUser'

export const Login = () => {

    //Initialize state variables for user registration
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<string | null>(null)
    const [isLogginIn, setIsLoggingIn] = useState<boolean>(false)

    //Conncects to CreateNewUser service and registers the user
    const handleLogin = () => {
        setIsLoggingIn(true);
        LoginUser(email, password)
        .then((userCredential)=> console.log("Successful Login"))
        .catch((error)=>setLoginError(error.message))
        .finally(()=>setIsLoggingIn(false))
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <fieldset>
                    <input type="text" placeholder="Enter username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </fieldset>
                <button type="submit" onClick={handleLogin} disabled={isLogginIn}>Log In</button>
            </div>
            {loginError && <p>{loginError}</p>}
        </div>
    )
}