import React from 'react'
import './Hero.css'

import heroWatch from '../../assets/images/hero-pic.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <h1>London's Prime Quality Watches</h1>
        <h3>Your self expression hand-crafted for perfection</h3>
        <button type='submit' className='browse-btn'>Browse Collection</button>
      </div>
    </div>
  )
}

export default Hero