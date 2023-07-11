import React from 'react'
import { createContext } from "react";
import {useState} from 'react'

export const myUserContext = createContext();

const UserContextProvider = ({children}) => {

// define a state to check if user is registered or public;

const [user, setUser] = useState({
    public: true,
    regUser: false,
    })
    
    const handleLoginPage = () => {
        setUser((user) => { return{...user, public: false} })
    }
    
    const handleSignUpPage = () => {
        setUser((user) => { return{...user, public: false} })
    }

    const homePageRedirect = () => {
        setUser((user) => { return{...user, public:true}})
    }

return (

    <myUserContext.Provider value={{user, handleLoginPage, handleSignUpPage, homePageRedirect}}>
        {children}
    </myUserContext.Provider>

)
}

export default UserContextProvider;