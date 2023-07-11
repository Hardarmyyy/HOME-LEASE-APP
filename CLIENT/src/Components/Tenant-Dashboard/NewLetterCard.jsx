import React from 'react'
import Button from '../../Utilities/Button'
import { useState } from 'react'



const NewLetterCard = () => {

const style = {
    container: {
        width: "280px",
        heigth: "320px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #D0D5DD",
        borderRadius: "10px",
        padding: "20px 10px",
        marginTop: "20px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        padding: "8px 10px",
        color: "#667085",
        fontSize: "12px",
        fontWeight: "200",
        fontFamily: "'Montserrat', sans-serif",
        borderRadius: "5px",
        border: "1px solid gray",
        outline: "none",
        width: "240px",
        margin: "0 auto"
    },
    paragraphOne: {
        textAlign: "center",
        color: "#3F4354",
        fontSize: "16px",
        fontFamily: "'Jost', sans-serif",
    },
    paragraphTwo: {
        textAlign: "center",
        color: "#667085",
        fontSize: "12px",
        fontWeight: "200",
        fontFamily: "'Montserrat', sans-serif"
    }
}

const [newsLetter, setNewsLetter] = useState({
    username: '',
    email: ''
})

const handleChange = (e) => {
    setNewsLetter((newsLetter) => {return {...newsLetter, [e.target.name]: e.target.value}})
}

const handleSubmit = (e) => {
    e.preventDefault()
    // const subscribedUser = {
    //     username: newsLetter.username,
    //     email: newsLetter.email
    // }
    setNewsLetter({
        username: '',
        email: ''}
    )
}


return (

<>
    <div style={style.container}>

        <p style={style.paragraphOne}> Get latest property updates </p>

        <p style={style.paragraphTwo}> Receive alerts when we have new properties available for rent </p>

        <form onSubmit={handleSubmit} style={style.form}>
            <input type="text" name="username" placeholder="Enter your name" value={newsLetter.username} onChange={handleChange} required style={style.input} maxLength={35}/> <br />
            <input type="text" name="email" placeholder="Enter your email address" value={newsLetter.email} onChange={handleChange} required style={style.input} maxLength={35}/> <br />
            <Button padding='5px 63px'> Subscribe now </Button>
        </form>
        
    </div>
</>

)
}

export default NewLetterCard