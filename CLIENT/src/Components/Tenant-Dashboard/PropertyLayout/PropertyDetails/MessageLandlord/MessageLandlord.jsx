import React from 'react'
import { useState } from 'react'
import Button from '../../../../../Utilities/Button'
import '../MessageLandlord/MessageLandlord.css'


const MessageLandlord = ({price}) => {

// define styles for the input form elements

const formStyle = {
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
    onFocus: {
        border: '2px solid #1C3F94',
        outline: 'none'
    },
    words: {
        color: "#667085",
        fontSize: "10px",
        fontWeight: "600",
        fontFamily: "'Montserrat', sans-serif",
        position: "absolute",
        top: "82%",
        right: "8%"
    }
}

// define styles  to set the hover state for the form input element;
const [onFocus, setOnFocus] = useState(false)

const inputStyle = onFocus ? {...formStyle.input, ...formStyle.onFocus}: formStyle.input ;

const handleInputStyle = () => {
    setOnFocus(!onFocus)
}

// define state for send message form input

const [message, setMessage] = useState({
    username: '',
    text: ''
})

const handleChange = (e) => {
    setMessage((message) => {return {...message, [e.target.name]: e.target.value.replace(/\n/g, '')}})
}

const handleSubmit = (e) => {
    e.preventDefault()
    // const newTenant = {
    //     username: message.username,
    //     message: message.text
    // }
    
    setMessage({
        username: '',
        text: ''}
    )
}

return (

<>
    <div className='messageLandlord'>

        <p> &#8358; {price}/ year </p>

        <p> Free cancellation. Cancel 48 hours before check-in for partial refund </p>

        <form onSubmit={handleSubmit} style={formStyle.form}>

            <input type="text" name="username" placeholder="Enter your name" value={message.username} 
            onChange={handleChange} required maxLength={35} style={inputStyle} onFocus={handleInputStyle} onBlur={handleInputStyle}/> 
            <br />
            <textarea type="text" name="text" placeholder="Send a quick inquiry" value={message.text} 
            onChange={handleChange} rows={5} maxLength={125} required style={inputStyle} onFocus={handleInputStyle} onBlur={handleInputStyle}></textarea> 
            <br />

            {message.text.length > 0 ?
            <span style={formStyle.words}> {125 - `${message.text.length}`} words remaining </span>
            : null}
            <Button padding='5px 63px'> Send message </Button>

        </form>

    </div>

</>

)
}

export default MessageLandlord