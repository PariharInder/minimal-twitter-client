import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../components/Login'
import firebase from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { app } from '../services/Firebase';

export const Profile = () => {
  const { loggedIn } = useContext(AuthContext);
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null)

  const auth = getAuth(app)

  useEffect(() => {
    if (loggedIn) {
      const currentUser = auth.currentUser
      if (currentUser) {
        setUserData({
          name: currentUser.displayName || '',
          email: currentUser.email || '',
        })
      }
    }
  }, [loggedIn])

  return (
    <>
    {console.log(userData?.email)}
    </>
  )
}
