import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Navigation/Navigation'
import { myUserContext } from '../../../Utilities/UserContext'
import { useContext } from 'react'


const PropertyLayout = () => {

const {user, handleLoginPage, handleSignUpPage, homePageRedirect} = useContext(myUserContext)

return (

<>
    <Navigation user = {user} handleLoginPage = {handleLoginPage} handleSignUpPage={handleSignUpPage} homePageRedirect={homePageRedirect}></Navigation>

    <Outlet></Outlet>
</>

)
}

export default PropertyLayout