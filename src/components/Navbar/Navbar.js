import React from 'react';
import './Navbar.css';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {SlBag} from 'react-icons/sl';

import logo from '../../assets/images/logo_transparent.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='banner'>
        Free Worldwide Express Shipping
      </div>
      <div className='container'>
        <img className='logo' src={logo} alt='' />
        <div className='dropdown-menu'>
          <ul>
            <li><a href='#'>Collections</a></li>
            <li><a href='#'>Watches</a></li>
            <li><a href='#'>Bracelets</a></li>
            <li><a href='#'>Necklaces</a></li>
            <li><a href='#'>Custom Made</a></li>
            <li><a href='#'>Gift Guide</a></li>
            <li><a href='#'>Support</a></li>
          </ul>
        </div>
        <div className='user'>
          <div>
            <button className='dollar-conversion'>USD</button>
          </div>
          {/* <div className='dollar-conversion-dropdown'>
            <ul>
              <li>AED</li>
              <li>AUD</li>
              <li>CAD</li>
              <li>EUR</li>
              <li>GBP</li>
              <li>HKD</li>
              <li>KRW</li>
              <li>NZD</li>
              <li>SGD</li>
              <li>USD</li>
            </ul>
          </div> */}
          <span className='user-profile'><a href='#'><AiOutlineUser /></a></span>
          <span className='search-btn'><a href='#'><AiOutlineSearch /></a></span>
          <span className='cart'><a href='#'><SlBag /></a></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar