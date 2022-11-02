import React from 'react'
import './Marketing.css';

import MarketingVideo from '../../assets/images/marketing-video-final.mp4'
import logo from '../../assets/images/logo_transparent.png'


const Marketing = () => {
  return (
    <div className='marketing'>
        <div className='content'>
            <h1>Passion of Handcraft</h1>
        </div>
        <div className='container'>
            <video className='marketing-video' src={MarketingVideo} width="100%;" height="600rem" autoPlay loop muted />
            {/* <img className='logo-white' src={logo} alt='' /> */}
        </div>
    </div>
  )
}

export default Marketing