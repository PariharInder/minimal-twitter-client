import { getAuth, UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import {app} from './Firebase'

const auth = getAuth(app)

//Registers the user on firebase
export const LoginUser = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password)
}