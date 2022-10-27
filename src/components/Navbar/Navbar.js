import React from 'react';
import './Navbar.css';

import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {SlBag} from 'react-icons/sl';
import {RiArrowDropDownLine} from 'react-icons/ri';

import logo from '../../assets/images/logo_transparent.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='banner'>
        Free Worldwide Express Shipping
      </div>
      <div className='container'>
        <img className='logo' src={logo} alt='' />
        <div className='main-menu'>
          <ul>
            <li><a href='#'>Collections</a></li>
              <div className='dropdown-collections'>
                <ul className='exclusive-collections'>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                </ul>
                <ul className='dropdown-collections'>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                  <li>Exclusive Collections</li>
                </ul>
              </div>
            <li><a href='#'>Watches</a></li>
            <li><a href='#'>Bracelets</a></li>
            <li><a href='#'>Necklaces</a></li>
            <li><a href='#'>Custom Made</a></li>
            <li><a href='#'>Gift Guide</a></li>
            <li><a href='#'>Support</a></li>
          </ul>
        </div>
        <div className='user'>
          <div className='dropdown-dc'>
              <button class='dropdown-hover-dc'>USD <RiArrowDropDownLine className='caret' /></button>
              <div className='dropdown-menu-dc'>
                <a href='index.html'>AUD</a>
                <a href='index.html'>CAD</a>
                <a href='index.html'>EUR</a>
                <a href='index.html'>GBP</a>
                <a href='index.html'>NZD</a>
                <a href='index.html'>SGD</a>
              </div>
          </div>
          <span className='user-profile'><a href='#'><AiOutlineUser /></a></span>
          <span className='search-btn'><a href='#'><AiOutlineSearch /></a></span>
          <span className='cart'><a href='#'><SlBag /></a></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar


{/* <div className='dropdown'>
<div className='select'>
  <span className='selected'>USD</span>
  <div className='caret'></div>
</div>
<ul className='menu'>
    <li>AED</li>
    <li>AUD</li>
    <li>CAD</li>
    <li>EUR</li>
    <li>GBP</li>
    <li>HKD</li>
    <li>KRW</li>
    <li>NZD</li>
    <li>SGD</li>
    <li class='active'><a href='#'>USD</a></li>
</ul> */}