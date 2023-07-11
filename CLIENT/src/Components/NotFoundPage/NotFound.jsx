import React from 'react'
import { Link } from 'react-router-dom'
import '../../Components/NotFoundPage/NotFound.css'

const NotFound = () => {


return (

<>

    <section className='notFound'>

        <h1> Page not found </h1>
        <Link to = '/'> Back to home </Link>

    </section>
</>

)

}

export default NotFound