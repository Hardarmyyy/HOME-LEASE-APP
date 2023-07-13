import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from "react-icons/md"; 
import { LuBedSingle } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import { BsFillHeartFill } from "react-icons/bs";
import '../PropertyCard/Propertycard.css'
import { useContext, useState } from 'react';
import { myPropertyContext } from '../../../../../Utilities/PropertyContext';
import Share from '../../PropertyDetails/ShareIcons/Share';


const PropertyCard = ({id, title, photo, beds, type, amount, street , city, state, description, premium, furnished, selfShowing, bathroom, PostTime, like }) => {

// styles for icons
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
        display: "none"
    },
    location: {
        fontSize: "15px",
        marginRight: "5px",
    },
    bedroom: {
        fontSize: "15px",
        marginRight: "5px",
    },
    bathroom: {
        fontSize: "15px",
        marginRight: "5px",
    }
}

const {handleLike} = useContext(myPropertyContext)

return (

<main className='container'>
    <span className='timeStamp'> {PostTime} </span>

    <div className='cardContainer'>

        <img src={photo[0]} alt='apartment photo'/>

        <div className='propertyDetailsContainer'>

            <div className='propertyDetails'>

                <h3> {title} </h3>

                <h3> {beds} bedroom flat / {type} for rent </h3>

                <p> &#8358; {amount} </p>

                <p> <MdOutlineLocationOn style={icon.location}></MdOutlineLocationOn> {street}, {street}, {state}</p>

                <p> {description.slice(0,100)} <Link to={`/property-for-rent/${id}`}> ... more details</Link> </p> 

                <ul className='perks'> 

                    {furnished ? <li> furnished </li> : <li> unfurnished </li>}

                    {premium ? <li> premium </li> : null}

                    {selfShowing ? <li> Self Showing Tour </li> : null} 

                </ul>

            </div>

            <div className='amenitiesContainer'>

                <div className='amenities'>

                    <p> <LuBedSingle style={icon.bedroom}></LuBedSingle> {beds} bedroom </p>
                    <p> <FaBath style={icon.bathroom}></FaBath> {bathroom} bathroom </p>

                </div>

                <div className='likes'>

                    <p style={icon.share}> <RxShare2 ></RxShare2> share </p>

                    {like ? <p onClick={() => handleLike(id)}> <BsFillHeartFill style={icon.like}></BsFillHeartFill> Like </p> 
                    : 
                    <p onClick={() => handleLike(id)}> <BsFillHeartFill style={icon.dislike}></BsFillHeartFill> Like </p>}

                </div>

            </div>  

        </div>

    </div>
</main>

)


}

export default PropertyCard