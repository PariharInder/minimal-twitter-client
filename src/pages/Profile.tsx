import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../components/Login';
import { getAuth } from 'firebase/auth';
import { app, db } from '../services/Firebase';
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export const Profile = () => {
  const { loggedIn } = useContext(AuthContext);
  const [message, setMessage]= useState<string>('')
  const [userData, setUserData] = useState<{ username?: string; email: string; gender?: string; birthday?: string } | null>(null);

  const auth = getAuth(app);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const fetchData = async () => {
      if (loggedIn) {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userDocRef = doc(usersCollectionRef, currentUser.uid);
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData({
              username: data.username || '',
              email: currentUser.email || '',
              gender: data.gender || undefined,
              birthday: data.birthday || undefined,
            });
          } else {
            await setDoc(doc(usersCollectionRef, currentUser.uid), {
              username: currentUser.displayName || '',
              email: currentUser.email || '',
              gender: null,
              birthday: null,
            })
          }
        }
      }
    };
    fetchData();
  }, [loggedIn]);
  
  const handleSubmit = async () => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const userDocRef = doc(usersCollectionRef, currentUser.uid);
      await updateDoc(userDocRef, {
        username: userData?.username || '',
        gender: userData?.gender || null,
        birthday: userData?.birthday || null,
      });
      setMessage('User data updated successfully!');
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
    <div className="bg-stone-900 p-6 rounded-lg shadow-xl w-5/6 lg:w-1/3 md:w-1/2 flex flex-col justify-center items-center h-full">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-8 text-white">User Information</h1>
        <div className="flex flex-col items-center">
          {userData && (
            <>
              <input
                className="w-full m-2 rounded-xl h-8 placeholder:text-neutral-100 bg-neutral-900 shadow-sm border-solid text-white"
                type="text"
                placeholder="Username"
                value={userData.username || ''}
                onChange={(event) =>
                  setUserData((prevState) =>
                    prevState ? { ...prevState, username: event.target.value } : null
                  )
                }
              />
              <input
                className="w-full m-2 rounded-xl h-8 placeholder:text-neutral-100 bg-neutral-900 shadow-sm border-solid text-white"
                type="text"
                placeholder="Gender"
                value={userData.gender || ''}
                onChange={(event) =>
                  setUserData((prevState) =>
                    prevState ? { ...prevState, gender: event.target.value } : null
                  )
                }
              />
              <input
                className="w-full m-2 rounded-xl h-8 placeholder:text-neutral-100 bg-neutral-900 shadow-sm border-solid text-white"
                type="text"
                placeholder="Birthday"
                value={userData.birthday || ''}
                onChange={(event) =>
                  setUserData((prevState) =>
                    prevState ? { ...prevState, birthday: event.target.value } : null
                  )
                }
              />
              <button
                className="bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition-colors w-50"
                onClick={handleSubmit}
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  )}