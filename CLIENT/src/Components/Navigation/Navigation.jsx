import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../Navigation/Navigation.css'
import image from '../../assets/Favicon.png'


const Navigation = ({user, handleLoginPage, handleSignUpPage, homePageRedirect}) => {


return (

<>
    <nav className='navigation'>

        <div className='logo'>

            <img src={image} alt='logo image'/>
            <Link to='/' onClick={homePageRedirect}> <h1> KAJEDO HOMES </h1> </Link> 

        </div>

        {user.public ? 
            <>
                <div className='links'>
                    <NavLink to = '/property-for-rent'> Find an Apartment </NavLink>
                    <NavLink to = '/list-property' onClick={handleLoginPage}> List your property </NavLink>
                </div>

                <div className='loginSignUp'>
                    <NavLink to = '/login' onClick={handleLoginPage}> Login </NavLink>
                    <NavLink to = '/signup' onClick={handleSignUpPage}> Sign up </NavLink>
                </div>
            </>
        
        : 
            null
        } 

        {user.regUser ? 
            <>
                <div className='userProfile'>

                    <p> user.Profile photo </p>
                    <ul>
                        <li> <Link> User.username </Link> </li> 
                        <li> <Link> Log out </Link> </li>
                    </ul>

                </div>
            </>
        : 
            null
        } 


    </nav>
</>
)
}

export default Navigation