import { createUserWithEmailAndPassword, getAuth, UserCredential } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateNewUser } from '../services/CreateNewUser'

export const Register = () => {

    //Initialize state variables for user registration
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [registrationError, setRegistrationError] = useState<string | null>(null)
    const [isRegistering, setIsRegistering] = useState<boolean>(false)

    const navigate = useNavigate()
    
    //Conncects to CreateNewUser service and registers the user
    const handleRegister = () => {
        setIsRegistering(true);
        CreateNewUser(email, password)
        .then((userCredential)=> navigate("/feed"))
        .catch((error)=>setRegistrationError(error.message))
        .finally(()=>setIsRegistering(false))
    }

    return (
        <div className=' bg-stone-900 p-6 rounded-lg shadow-xl w-5/6 lg:w-1/3 md:w-1/2 flex justify-center items-center h-full'>
            <div className='text-center mb-10'>
                <h1 className='text-3xl font-bold mb-8 text-white'>Register</h1>
                <div className='p-4 mb-2'>
                    <input className='w-full m-2 rounded-xl h-8 placeholder:text-neutral-100 bg-neutral-900 shadow-sm border-solid text-white' type="text" placeholder="Enter username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className='w-full m-2 rounded-xl h-8 placeholder:text-neutral-100 bg-neutral-900 shadow-sm border-solid text-white' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    {registrationError && <p>{registrationError}</p>}
                    <button type="submit" onClick={handleRegister} disabled={isRegistering} className='bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition-colors w-50'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}