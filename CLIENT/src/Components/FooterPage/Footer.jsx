import React from 'react'
import './Footer.css'
import Button from '../../Utilities/Button'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import image from '../../assets/Favicon.png'

const Footer = () => {

// inLine styles for the social links icons

const iconStyles = {
    linkStyle: {
        textDecoration: 'none',
    },
    icons: {
        backgroundColor: '#FFFFFF',
        marginRight: '20px ',
        fontSize: '42px',
        color: '#1C3F94',
        padding: '10px',
        borderRadius: '5px'
    }
}

const [email, setEmail] = useState('')

const handleChange = (e) => {
    setEmail(e.target.value)
}

const handleFormSubmit = (e) => {
    e.preventDefault()
    // const user = email
    setEmail('')
}


return (

<>
    <section className='footer'>

        <div className='footerTop'>

            <div className='logo'>
                
                <img src={image} alt='logo image'/>
                <h1> KAJEDO HOMES </h1>

            </div>

            <div className='footerLinksContainer'>

                <div className='footerLinks'>
                    <h4> About Us </h4>
                    <p>< Link> Affilates</Link> </p>
                    <p> <Link> Privacy Policy </Link> </p>
                    <p> <Link> Terms of Service </Link> </p>
                </div>

                <div className='footerLinks'>
                    <h4> Support </h4>
                    <p> <Link> Help Center </Link> </p>
                    <p> <Link> FAQs </Link> </p>
                </div>

                <div>

                    <div className='footerLinks'>
                        <h4> Contact Us </h4>
                        <address> Address </address>
                        <p> 230 Herbert Macualay Way, </p>
                        <p> Yaba, Lagos, </p>
                        <p> Nigeria. </p>
                    </div>

                    <div className='footerLinks'>
                        <h4> Phone Number </h4>
                        <p> + 000-000-000 </p>
                    </div>

                </div>

            </div>

        </div>

        <div className='footerBottom'>

            <div className='updates'>

                <h4> Get Update </h4>
                <p> We're growing fast. Get daily update </p>

                <div className='emailAlerts'>
                    <form onSubmit={handleFormSubmit}>
                        <input type='text' placeholder='Enter your email address' name='email' value={email} onChange={handleChange} required maxLength={45}/>
                        <Button padding='10px 15px'> Join now </Button>
                    </form>
                </div>

            </div>

            <div className='socialMedia'>

                <p> Follow us on social media </p>

                <div className='icons'>
                    <Link style={iconStyles.linkStyle}> <FaFacebookF style={iconStyles.icons}></FaFacebookF> </Link>
                    <Link style={iconStyles.linkStyle}> <FaTwitter style={iconStyles.icons}></FaTwitter> </Link>
                    <Link style={iconStyles.linkStyle}> <FaLinkedinIn style={iconStyles.icons}></FaLinkedinIn> </Link>
                </div>

            </div>

            <p> &copy; 2023 Kajedo. All rights reserved </p>

        </div>


    </section>
</>

)
}

export default Footer