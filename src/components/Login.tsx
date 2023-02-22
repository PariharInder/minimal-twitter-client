import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/LoginUser'

export const AuthContext = createContext<{loggedIn: boolean; setLoggedIn: (loggedIn: boolean) => void}>({
    loggedIn: false,
    setLoggedIn: () => {}
  })

export const Login = () => {

    //Initialize state variables for user login
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<string | null>(null)
    const [isLogginIn, setIsLoggingIn] = useState<boolean>(false)

    const navigate = useNavigate()

    const { setLoggedIn } = useContext(AuthContext)

    //Conncects to LoginUser service and registers the user
    const handleLogin = () => {
        setIsLoggingIn(true);
        LoginUser(email, password)
        .then((userCredential)=> {
            setLoggedIn(true) //Updates the login state
            navigate("/profile")
        })
        .catch((error)=>setLoginError(error.message))
    }

    return (
        <div className=' bg-stone-900 p-6 rounded-lg shadow-xl w-5/6 lg:w-1/3 md:w-1/2 flex justify-center items-center h-full'>
            <div className='text-center mb-10'>
                <h1 className='text-3xl font-bold mb-8 text-white'>Login</h1>
                <div className='p-4 mb-2'>
                    <input className='w-full m-2 rounded-xl h-8 placeholder:text-neutral-100 bg-neutral-900 shadow-sm border-solid text-white' type="text" placeholder="Enter username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className='w-full m-2 rounded-xl h-8 placeholder:text-neutral-100 bg-neutral-900 shadow-sm border-solid text-white' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    {loginError && <p>{loginError}</p>}
                    <button type="submit" onClick={handleLogin} disabled={isLogginIn} className='bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition-colors w-50'>Log In</button>
                </div>
            </div>
        </div>
    )
}