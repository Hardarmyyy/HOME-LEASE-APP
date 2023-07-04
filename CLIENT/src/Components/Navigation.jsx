import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../Styles/Navigation.css'


const Navigation = ({user, handleLoginPage, handleSignUpPage}) => {


return (

<>
    <nav className='navigation'>

        <Link to='/'> <h1> KAJEDO HOMES </h1> </Link>

        {user.login || user.signUp ? null : 
        

        <ul className='links'>
            <li><NavLink to ='/'> Home </NavLink></li>
            <li><NavLink to = '/findproperty'> Find an Apartment </NavLink></li>
            <li><NavLink to = '/listproperty'> List your property </NavLink></li>
        </ul>

        }

        {user.login || user.signUp ? null :   

        <ul className='loginSignUp'>
            <li><NavLink to = '/login' onClick={handleLoginPage}> Login </NavLink></li>
            <li><NavLink to = '/signup' onClick={handleSignUpPage}> Sign up </NavLink></li>
        </ul>

        }

    </nav>
</>
)
}

export default Navigation