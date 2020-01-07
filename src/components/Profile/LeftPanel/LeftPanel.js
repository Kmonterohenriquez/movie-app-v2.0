import React from 'react'
import profileImg from '../../../img/profile-placeholder.jpg'

import './LeftPanel.sass'

const LeftPanel =()=> {
    return(
        <div className="LeftPanel">
            <div className='Profile-picture-container'>
                {/* camera */}
                <img src="" alt=""/>
                {/* profile picture */}
                <img src={profileImg} className='Profile-picture' alt=""/>
            </div>
            <h1>Kevin Montero</h1>
            <button className='primary-button'>Logout</button>
        </div>
    )
}

export default LeftPanel