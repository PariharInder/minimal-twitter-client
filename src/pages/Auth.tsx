import { useState } from 'react'
import { Login } from '../components/Login'
import { Register } from '../components/Register'


export default function Auth() {
    const [showLogin, setShowLogin] = useState<boolean>(true);
  
    const handleToggle = (): void => {
      setShowLogin(!showLogin)
    }
  
    return (
      <>
        <div className='flex justify-center mt-10'>
        <button
  className={`flex items-center justify-center w-5/6 lg:w-2/6 md:w-1/2 px-4 py-2 rounded-t-md font-medium text-sm text-white focus:outline-none ${showLogin ? 'bg-red-500' : 'bg-red-500'}`}
  onClick={handleToggle}
>
            {showLogin ? 'Register' : 'Log In'}
          </button>
        </div>
        <div className='flex justify-center items-center h-4/6'>
          {showLogin ? <Login /> : <Register />}
        </div>
      </>
    )
}