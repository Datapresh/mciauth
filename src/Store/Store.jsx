import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react'
import { auth } from '../Firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged

} from 'firebase/auth'


const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const Logout = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (cUser) => {
            setUser(cUser)

        });
        return () => {
            unsubcribed()
        }
    }, [])



    return (

        <UserContext.Provider value={{Register , Signin, Logout, user}} >
            {children}
        </UserContext.Provider>
    )

}


export const UserAuth = () => {
    return useContext(UserContext)
}