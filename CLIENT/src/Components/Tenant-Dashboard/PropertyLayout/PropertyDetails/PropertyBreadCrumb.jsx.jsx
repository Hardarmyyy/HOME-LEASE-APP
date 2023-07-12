import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const PropertyBreadCrumb = () => {

const location = useLocation()

const home = "Home"

const propertyCrumbs = location.pathname.slice(0, 9).toLowerCase() 
const detailsCrumbs = location.pathname.slice(18).toLowerCase();

const crumbStyle = {
    link: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "18px",
        textDecoration: "none",
        color: "#333333",
    },
    crumb: {
        cursor: "pointer",
        color: "#1C3F94",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "18px",
    }
}

return (

    <>
        <div style={crumbStyle.container}>

            <Link style={crumbStyle.link} to='/'> {home} </Link>
            <Link style={crumbStyle.link} to='/property-for-rent'> {propertyCrumbs} </Link>
            <span style={crumbStyle.crumb}> {detailsCrumbs} </span>

        </div>
    </>

)
}

export default PropertyBreadCrumb