import React from 'react'
import {FacebookShareButton, EmailShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, EmailIcon, TwitterIcon, WhatsappIcon} from "react-share";
import '../ShareIcons/Share.css'



const Share = () => {

const currentPageUrl = window.location.href;

return (

<>
    <div className='shareIcons'>

        <FacebookShareButton url={currentPageUrl} quote=''>
            <FacebookIcon className='icons'></FacebookIcon>
        </FacebookShareButton>

        <TwitterShareButton url={currentPageUrl} title='I want to share this property with you'>
            <TwitterIcon className='icons'></TwitterIcon>
        </TwitterShareButton>

        <WhatsappShareButton url={currentPageUrl} title='I want to share this property with you'>
            <WhatsappIcon className='icons'></WhatsappIcon>
        </WhatsappShareButton>

    </div>
</>

)
}

export default Share