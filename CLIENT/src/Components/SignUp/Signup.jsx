import React from 'react'
import Navigation from '../Navigation/Navigation'
import { useContext } from 'react'
import { myUserContext } from '../../Utilities/UserContext'



const Signup = () => {

const {user, handleLoginPage, handleSignUpPage, homePageRedirect} = useContext(myUserContext)

return (

<>
    <header>

    <Navigation user = {user} handleLoginPage = {handleLoginPage} handleSignUpPage={handleSignUpPage} homePageRedirect={homePageRedirect}></Navigation>

    </header>

    <section>

        <h1> sign up page </h1>

    </section>
</>

)
}

export default Signup