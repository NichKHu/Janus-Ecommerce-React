import React from 'react';
import './Navbar.css';

import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {SlBag} from 'react-icons/sl';
import {RiArrowDropDownLine} from 'react-icons/ri';

import logo from '../../assets/images/logo_transparent.png'
import trending from '../../assets/images/trending.jpg'
import newArrivals from '../../assets/images/new-arrivals.jpg'

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
            <div className='collections'>
              <li><a href='#'>Collections</a></li>
                <div className='dropdown-collections'>
                  <ul className='exclusive-collections'>
                    <li className='exclusive-collections-header'><a href='index.html'>Exclusive Collections</a></li>
                    <li><a href='index.html'>Atlas Collection</a></li>
                    <li><a href='index.html'>Chronos Collection</a></li>
                    <li><a href='index.html'>Eros Collection</a></li>
                    <li><a href='index.html'>Orion Collection</a></li>
                    <li><a href='index.html'>Percival Collection</a></li>
                  </ul>
                  <ul className='trending-collections'>
                    <li className='trending-collections-header'><a href='index.html'>Trending Collections</a></li>
                    <li><a href='index.html'>Best Sellers</a></li>
                    <li><a href='index.html'>New Arrivals</a></li>
                    <li><a href='index.html'>Limited Edition</a></li>
                    <li><a href='index.html'>On Sale</a></li>
                    <li><a href='index.html'>Bundles</a></li>
                  </ul>
                  <div className='zoom-in'>
                    <figure>
                      <img className='trending' src={trending} alt='' />
                      <p>Trending Now</p>
                    </figure>
                  </div>
                  <div className='zoom-in'>
                    <figure>
                      <img className='new-arrivals' src={newArrivals} alt='' />
                      <p>New Arrivals</p>
                    </figure>
                  </div>
                </div>
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
              <button class='dropdown-button-dc'>USD <RiArrowDropDownLine className='caret' /></button>
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