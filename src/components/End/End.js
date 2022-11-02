import React from 'react'
import './End.css'

import {AiOutlineFacebook} from 'react-icons/ai';
import {GrTwitter} from 'react-icons/gr';
import {AiOutlineInstagram} from 'react-icons/ai';
import {ImPinterest2} from 'react-icons/im';
import {IoLogoTumblr} from 'react-icons/io';

const End = () => {
  return (
    <div className='end'>
        <div className='end-content'>
            <div className='our-brand list'>
                <h3 className='header'>Our Brand</h3>
                    <ul className='our-brand-list'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Retailers</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
            </div>
            <div className='assistance list'>
                <h3 className='header'>Assistance</h3>
                    <ul className='assistance-list'>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Refunds & Exchanges</a></li>
                        <li><a href="#">Delivery Information</a></li>
                        <li><a href="#">Jewellery Care</a></li>
                        <li><a href="#">Hallmarking</a></li>
                    </ul>
            </div>
            <div className='newsletter list'>
                <h3 className='header'>Newsletter</h3>
                <p className='newsletter-info'>Subscribe to recieve updates, access to exclusive subscriber discount, and more.</p>
                <form>
                    <input className='user-input' type='email' placeholder='Enter your email address'></input>
                    <button className='btn-subscribe' type='button' name='button'>SUBSCRIBE</button>
                </form>
            </div>
            <div className='contact list'>
                <h3 className='contact-us'>Contact Us</h3>
                    <p className='supp-email'>support@janusworks.com</p>
                    <h4 className='call-us'>Call Us</h4>
                    <p className='schedule'>M-F | 8am-6pm PT</p>
                    <p className='phone-num'>+44 20 3663 0230</p>
                    <div className="social-media"><AiOutlineFacebook /><GrTwitter /><AiOutlineInstagram /><ImPinterest2 /><IoLogoTumblr /></div>
            </div>
        </div>
        <div className='copyright-ending'>
                <p>© 2022 JANUS Ltd-All rights reserved GB VAT 219 6348 89 - 307 Linen Hall 162-168 Regent Street W1B 5TE</p>
        </div>
    </div>
  )
}

export default End