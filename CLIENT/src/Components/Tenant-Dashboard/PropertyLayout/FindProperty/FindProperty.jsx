import React, { useState } from 'react'
import '../FindProperty/FindProperty.css'
import Footer from '../../../FooterPage/Footer'
import { useContext } from 'react'
import { myPropertyContext } from '../../../../Utilities/PropertyContext'
import PropertyCard from './PropertyCard/PropertyCard'
import SearchProperty from './SearchProperty'
import NewLetterCard from './NewLetterCard'
import BreadCrumb from './BreadCrumb'
import Pagination from './Pagination/Pagination'


const FindProperty = () => {

// import properties from myPropertyContext
const {properties} = useContext(myPropertyContext)

// define state and set number of properties per page

const [currentPage, setCurrentPage] = useState(1);
const [propertiesPerPage] = useState(5);

const indexOfLastProperty = currentPage * propertiesPerPage;
const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
const totalPages = Math.ceil(properties.length/propertiesPerPage);
const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty)


return (

<>

    <section className='propertyListingsContainer'>

        <BreadCrumb></BreadCrumb>

        <SearchProperty></SearchProperty>

        {/* {Need to dynamiccaly check the city } */}
        <p> Properties for rent (Ikeja , Lagos) </p> 

        <div className='propertylistings'>

            <div>

                {currentProperties.map((property) =>

                    <div key={property.id}>

                    <PropertyCard {...property}></PropertyCard>

                    </div>

                )}

            </div>

            <NewLetterCard></NewLetterCard>

        </div>

        <Pagination pages = {totalPages} setCurrentPage={setCurrentPage}></Pagination>

    </section>
    
    <Footer></Footer>

</>

)
}

export default FindProperty