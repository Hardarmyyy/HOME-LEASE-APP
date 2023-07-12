import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const BreadCrumb = () => {

const location = useLocation()

const home = "Home"

const crumbs = location.pathname.slice(0, 9).toLowerCase();

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
            <span style={crumbStyle.crumb}> {crumbs} </span>

        </div>
    </>

)
}

export default BreadCrumb