import React from 'react';
import './Navbar.css';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {SlBag} from 'react-icons/sl';

// import ReactDOM from 'react-dom'
// import {FontAwesomeIcon} from '@fontawesome/react-fontawesome'
// import {FaAngleDown} from '@fontawesome/free-solid-svg-icons'

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
            <a href className='dollar-dropdown'>USD</a>
              {/* <ul class='sub-menu'>
                <li><a href='#'>AED</a></li>
                <li><a href='#'>AUD</a></li>
                <li><a href='#'>CAD</a></li>
                <li><a href='#'>EUR</a></li>
                <li><a href='#'>GBP</a></li>
                <li><a href='#'>HKD</a></li>
                <li><a href='#'>KRW</a></li>
                <li><a href='#'>NZD</a></li>
                <li><a href='#'>SGD</a></li>
                <li><a href='#'>USD</a></li>
              </ul> */}
          <span className='user-profile'><a href='#'><AiOutlineUser /></a></span>
          <span className='search-btn'><a href='#'><AiOutlineSearch /></a></span>
          <span className='cart'><a href='#'><SlBag /></a></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar