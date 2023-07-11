import React from 'react'
import Navigation from '../Navigation/Navigation'
import { useContext } from 'react'
import { myUserContext } from '../../Utilities/UserContext'

const Login = () => {

const {user, handleLoginPage, handleSignUpPage, homePageRedirect} = useContext(myUserContext)

return (

<>

    <header>

        <Navigation user = {user} handleLoginPage = {handleLoginPage} handleSignUpPage={handleSignUpPage} homePageRedirect={homePageRedirect}></Navigation>

    </header>

    <section>

        <h1> Login Page </h1>
        
    </section>
</>

)

}

export default Login