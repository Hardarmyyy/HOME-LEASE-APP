import React from 'react'
import Button from '../../../../../Utilities/Button'
import '../TenantsALertMessage/Alert.css'
import { Link } from 'react-router-dom'

const Alert = () => {

const linkStyle = {
    textDecoration: "none",
    color: "#FFFFFF"
}

return (

<>
    <div className='safetyBox'>

        <h4> Safety Tips </h4>

        <ul>
            <li> Only pay Rental fee or any upfront payment after you verify the Landlord. </li>
            <li> Ensure inspection is done only within the stipulated time allocated to you. </li>
            <li> Do not keep communication outside of the platform </li>
            <li> Kajedo homes is not liable for any monetary transaction between you and the Agent outside the platform. </li>
        </ul>

        <Button padding='5px 63px' backgroundColor='#DC143C'> <Link to='/' style={linkStyle}> Report listing </Link> </Button>

    </div>
</>

)
}

export default Alert