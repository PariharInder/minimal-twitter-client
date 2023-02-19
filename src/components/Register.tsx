import { createUserWithEmailAndPassword, getAuth, UserCredential } from 'firebase/auth'
import { useState } from 'react'
import { CreateNewUser } from '../services/CreateNewUser'

export const Register = () => {

    //Initialize state variables for user registration
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [registrationError, setRegistrationError] = useState<string | null>(null)
    const [isRegistering, setIsRegistering] = useState<boolean>(false)

    //Conncects to CreateNewUser service and registers the user
    const handleRegister = () => {
        setIsRegistering(true);
        CreateNewUser(email, password)
        .then((userCredential)=> console.log("Successful Registration"))
        .catch((error)=>setRegistrationError(error.message))
        .finally(()=>setIsRegistering(false))
    }

    return (
        <div>
            <h1>Register</h1>
            <div>
                <fieldset>
                    <input type="text" placeholder="Enter username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </fieldset>
                <button type="submit" onClick={handleRegister} disabled={isRegistering}>Register</button>
            </div>
            {registrationError && <p>{registrationError}</p>}
        </div>
    )
}