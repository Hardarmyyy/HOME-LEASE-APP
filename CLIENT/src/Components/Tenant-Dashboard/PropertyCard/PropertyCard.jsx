import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from "react-icons/md"; 
import { LuBedSingle } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { RxShare2 } from "react-icons/rx";
import { BsFillHeartFill } from "react-icons/bs";
import '../PropertyCard/Propertycard.css'
import { useState } from 'react';


const PropertyCard = ({title, photo, beds, type, amount, area, city, state, description, premium, furnished, selfShowing, bathroom, PostTime }) => {

const icon = {
    like: {
        fontSize: "16px",
        marginRight: "5px",
        color: "red"
    },
    dislike: {
        fontSize: "16px",
        marginRight: "5px",
    },
    share: {
        fontSize: "15px",
        marginRight: "5px",
    }
}

const [like, setLike] = useState(false);

const handleLike = () => {
    setLike(!like);
}

return (

<>
    <div className='cardContainer'>

        <img src={photo} alt='apartment photo'/>

        <div className='propertyDetailsContainer'>

            <div className='propertyDetails'>

                <h3> {title} </h3>

                <h3> {beds} bedroom flat / {type} for rent </h3>

                <p> &#8358; {amount} </p>

                <p> <MdOutlineLocationOn style={icon.share}></MdOutlineLocationOn> {area}, {city}, {state}</p>

                <p> {description.slice(0,100)} ... <Link> Read more </Link> </p>

                <ul className='perks'>

                    {furnished ? <li> furnished </li> : <li> unfurnished </li>}

                    {premium ? <li> premium </li> : null}

                    {selfShowing ? <li> Self Showing Tour </li> : null} 

                </ul>

            </div>

            <div className='amenitiesContainer'>

                <div className='amenities'>

                    <p> <LuBedSingle style={icon.share}></LuBedSingle> {beds} bedroom </p>
                    <p> <FaBath style={icon.share}></FaBath> {bathroom} bathroom </p>

                </div>

                <div className='likes'>

                    <p> <RxShare2 style={icon.share}></RxShare2> share </p>

                    {like ? <p onClick={handleLike}> <BsFillHeartFill style={icon.like}></BsFillHeartFill> Like </p> 
                    : 
                    <p onClick={handleLike}> <BsFillHeartFill style={icon.dislike}></BsFillHeartFill> Like </p>}

                </div>

            </div>  

        </div>

        <p className='timeStamp'> {PostTime} </p>

    </div>
</>

)


}

export default PropertyCard