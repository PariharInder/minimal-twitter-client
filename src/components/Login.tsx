import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/LoginUser'

export const Login = () => {

    //Initialize state variables for user login
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<string | null>(null)
    const [isLogginIn, setIsLoggingIn] = useState<boolean>(false)

    const navigate = useNavigate()

    //Conncects to LoginUser service and registers the user
    const handleLogin = () => {
        setIsLoggingIn(true);
        LoginUser(email, password)
        .then((userCredential)=> navigate("/feed"))
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