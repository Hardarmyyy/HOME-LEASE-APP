import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../Styles/Navigation.css'

const Navigation = () => {

    
return (

<>
    <nav className='navigation'>

        <Link to='/'> <h1> KAJEDO HOMES </h1> </Link>

        <ul className='links'>
            <li><NavLink to ='/'> Home </NavLink></li>
            <li><NavLink to = '/findproperty'> Find an Apartment </NavLink></li>
            <li><NavLink to = '/listproperty'> List your property </NavLink></li>
        </ul>

        <ul className='loginSignUp'>
            <li><NavLink to = '/login'> Login </NavLink></li>
            <li><NavLink to = '/signup'> Sign up </NavLink></li>
        </ul>

    </nav>
</>
)
}

export default Navigation