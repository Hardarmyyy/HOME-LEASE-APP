import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../Styles/Navigation.css'


const Navigation = ({user, handleLoginPage, handleSignUpPage, homePageRedirect}) => {


return (

<>
    <nav className='navigation'>

        <Link to='/' onClick={homePageRedirect}> <h1> KAJEDO HOMES </h1> </Link>

        {user.public ? 
        
        <ul className='links'>
            <li><NavLink to = '/find-property'> Find an Apartment </NavLink></li>
            <li><NavLink to = '/list-property'> List your property </NavLink></li>
        </ul>

        :

        null

        }

        {user.public ? 

        <ul className='loginSignUp'>
            <li><NavLink to = '/login' onClick={handleLoginPage}> Login </NavLink></li>
            <li><NavLink to = '/signup' onClick={handleSignUpPage}> Sign up </NavLink></li>
        </ul>

        :

        null

        }

    </nav>
</>
)
}

export default Navigation