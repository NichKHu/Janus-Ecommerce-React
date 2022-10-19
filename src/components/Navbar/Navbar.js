import React from 'react';
import './Navbar.css';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {SlBag} from 'react-icons/sl';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>JanusLondon</div>
        <div className='dropdown-menu'>
          <ul>
            <li><a href='#'>Collections</a></li>
            <li><a href='#'>Bracelets</a></li>
            <li><a href='#'>Rings</a></li>
            <li><a href='#'>Necklaces</a></li>
            <li><a href='#'>Women's</a></li>
            <li><a href='#'>Custom Made</a></li>
            <li><a href='#'>Gift Guide</a></li>
          </ul>
        </div>
        <div className='user'>
          <div>
            <button className='dollar-conversion'>USD</button>
          </div>
          <span className='user-profile'><AiOutlineUser /></span>
          <span className='search-btn'><AiOutlineSearch /></span>
          <span className='cart'><SlBag /></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar