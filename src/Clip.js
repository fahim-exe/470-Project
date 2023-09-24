import { Avatar } from '@mui/material';
import React from 'react'
import "./Clip.css"


function Clip({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='clip'>
            <Avatar className='clip__avatar' src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Clip;