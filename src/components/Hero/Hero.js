import React from 'react'
import './Hero.css'

import heroWatch from '../../assets/images/hero-pic.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-pic'>
        <img src={heroWatch} alt='' />
      </div>
    </div>
  )
}

export default Hero