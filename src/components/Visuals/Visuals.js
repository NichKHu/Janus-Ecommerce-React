import React from 'react'
import './Visuals.css'

import {GiCommercialAirplane} from 'react-icons/gi'; //International shipping icon
import {SlRefresh} from 'react-icons/sl'; //Return and exchange icon
import {GiDiamondHard} from 'react-icons/gi'; //Customize icon
import {SlPeople} from 'react-icons/sl'; //Customer support icon

const Visuals = () => {
  return (
    <div className='visuals'>
        <div className='container'>
            <div className='shipping aspect'>
                <GiCommercialAirplane className='icon' />
                <h4>Free Worldwide Shipping</h4>
                <p>We provide free priority shipping with DHL on all orders</p>
            </div>
            <div className='exchange aspect'>
                <SlRefresh className='icon' />
                <h4>Extended Return & Exchange</h4>
                <p>We offer free returns for items send back within 30 days.</p>
            </div>
            <div className='customization aspect'>
                <GiDiamondHard className='icon' />
                <h4>Complimentary Customization</h4>
                <p>Complimentary engraving and customized size for all orders.</p>
            </div>
            <div className='support aspect'>
                <SlPeople className='icon' />
                <h4>Flexible Customer Support</h4>
                <p>Reaching out to us is easy with 24/7 chat, phone call, or e-mail.</p>
            </div>
        </div>
    </div>
  )
}

export default Visuals