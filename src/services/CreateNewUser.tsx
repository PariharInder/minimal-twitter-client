import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import {app} from './Firebase'

const auth = getAuth(app)

//Registers the user on firebase
export const CreateNewUser = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password)
}