import React from 'react'
import './PropertyDetails.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import PropertyBreadCrumb from './PropertyBreadCrumb.jsx'
import Footer from '../../../FooterPage/Footer'
import { useContext } from 'react'
import { myPropertyContext } from '../../../../Utilities/PropertyContext'
import { RxShare2 } from "react-icons/rx";
import { BsFillHeartFill } from "react-icons/bs";
import { TbListDetails} from "react-icons/tb";
import { Link } from 'react-router-dom'
import MessageLandlord from './MessageLandlord/MessageLandlord'
import Alert from './TenantsALertMessage/Alert'
import Share from './ShareIcons/Share'

const PropertyDetails = () => {

// style for icons
const icon = {
    like: {
        fontSize: "16px",
        marginRight: "5px",
        color: "#DC143C"
    },
    dislike: {
        fontSize: "16px",
        marginRight: "5px",
    },
    share: {
        fontSize: "15px",
        marginRight: "5px",
    },
    photoDetails: {
        fontSize: "14px",
        marginRight: "5px",
    }
}

// catch the property id using useParams hook;

const {id} = useParams();

// import properties from property context to filter the exact property with id;
const {properties, handleLike} = useContext(myPropertyContext)

// filter the exact property that match with id
const filteredProperty = properties.filter((property) => property.id == id)

// define props for property details breadcrumbs
const numberOfBeds = filteredProperty.map((property) => Number(property.beds))

const typeOfProperty = filteredProperty.map((property) => property.type.toLowerCase())

const propertyStreet = filteredProperty.map((property) => property.street.toLowerCase()) 

const city = filteredProperty.map((property) => property.city.toLowerCase())

const propertyPrice = filteredProperty.map((property) => property.amount)

// define and map through the property photos to display or render only three photos from the array;
const propertyPhotos = filteredProperty.map((property) => property.photo.slice(0,3))

// define a useState to show and toggle off the share icons;
const [showIcons, setShowIcons] = useState(false)

const handleShowIcons = () => {
    setShowIcons(!showIcons)
}

return (

<>
    <section className='propertyDetailsContainer'>

        <PropertyBreadCrumb beds={numberOfBeds} type={typeOfProperty} place={city}></PropertyBreadCrumb>

        <div className='containerOne'>

            <div className='street'>

                <h3> {numberOfBeds} bedroom {typeOfProperty} on {propertyStreet} street</h3>

                <div className='likes'>

                    {showIcons && <Share style={icon.share}></Share>}

                    <p onClick={handleShowIcons}> <RxShare2 style={icon.share}></RxShare2> share </p>

                    {filteredProperty.map((property, index) => property.like ? 
                        <p key={index} onClick={() => handleLike(Number(property.id))}> <BsFillHeartFill style={icon.like}></BsFillHeartFill> Like </p> 
                    : 
                        <p key={index} onClick={() => handleLike(Number(property.id))}> <BsFillHeartFill style={icon.dislike}></BsFillHeartFill> Like </p>
                    )}

                </div>

            </div>

            {propertyPhotos.map((photo) => 
                <div className='photoContainer'>
                    <div className='gridPhotoWrapper'>

                        <div className='One'><img src={photo[0]} alt='photo one of apartment'/></div>
                        <div className='Two'><img src={photo[1]} alt='photo two of apartment'/></div>
                        <div className='Three'><img src={photo[2]} alt='photo three of apartment'/></div>

                    </div>

                    <div className='allPhotos'> <Link to='/'> <TbListDetails style={icon.photoDetails}></TbListDetails>Show all photos </Link></div>
                </div>
            )}

        </div>

        <div className='containerTwo'>

            <div>
                <h2> I am a review div </h2>
            </div>

            <div className='contactLandlord'>

                <MessageLandlord price={propertyPrice}></MessageLandlord>

                <Alert></Alert>

            </div>

        </div>

        <div className='containerThree'>

            <h3> I am a header for Search Location </h3>
            <div>
                <p> I am a div for Google maps. I will be done by Mr Joseph </p>
            </div>

        </div>

    </section>

    <Footer></Footer>
</>

)
}

export default PropertyDetails