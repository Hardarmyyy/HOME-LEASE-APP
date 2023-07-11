import React from 'react'
import '../Tenant-Dashboard/FindProperty.css'
import Footer from '../FooterPage/Footer'
import Navigation from '../Navigation/Navigation'
import { useContext } from 'react'
import { myUserContext } from '../../Utilities/UserContext'
import { myPropertyContext } from '../../Utilities/PropertyContext'
import PropertyCard from './PropertyCard/PropertyCard'
import SearchProperty from './SearchProperty'
import NewLetterCard from './NewLetterCard'


const FindProperty = () => {

const {user, handleLoginPage, handleSignUpPage, homePageRedirect} = useContext(myUserContext)
const {property} = useContext(myPropertyContext)

return (

<>

    <Navigation user = {user} handleLoginPage = {handleLoginPage} handleSignUpPage={handleSignUpPage} homePageRedirect={homePageRedirect}></Navigation>


    <section className='propertyListingsContainer'>

        {/* {breadcrumbs navigation}  */}
        <p> Home / property for rent </p>

        <SearchProperty></SearchProperty>

        {/* {Need to dynamiccaly check the city } */}
        <p> Properties for rent (Ikeja , Lagos) </p> 

        <div className='propertylistings'>

            <div>

                {property.map((listing) =>

                    <div key={listing.id}>

                        <PropertyCard {...listing}></PropertyCard>

                    </div>

                )}

            </div>

            <NewLetterCard></NewLetterCard>

        </div>

        {/* {Pagination 1,2 3,4,5,6} */}
        <p> Pagination 1,2 3,4,5,6 </p>

    </section>
    
    <Footer></Footer>
    
</>

)
}

export default FindProperty