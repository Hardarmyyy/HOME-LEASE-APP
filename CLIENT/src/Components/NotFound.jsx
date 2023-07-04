import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import '../Styles/NotFound.css'

const NotFound = () => {

console.log('render notfound page')

return (

<>
    {/* <Navigation user = {user} handleLoginPage = {handleLoginPage} handleSignUpPage={handleSignUpPage}></Navigation> */}

    <section className='notFound'>

        <h1> Page not found </h1>
        <Link to = '/'> Back to home </Link>

    </section>
</>

)

}

export default NotFound