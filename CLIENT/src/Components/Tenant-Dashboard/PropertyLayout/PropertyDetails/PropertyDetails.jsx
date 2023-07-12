import React from 'react'
import './PropertyDetails.css'
import { useParams } from 'react-router-dom'
import PropertyBreadCrumb from './PropertyBreadCrumb.jsx'
import Footer from '../../../FooterPage/Footer'

const PropertyDetails = () => {



return (

<>
    <section className='propertyDetailsContainer'>

        <PropertyBreadCrumb></PropertyBreadCrumb>

    </section>

    <Footer></Footer>
</>

)
}

export default PropertyDetails