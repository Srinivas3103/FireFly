import React from 'react'
import { assets } from '../../assets/aasets'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer-decor'>
            <div className="footer-florals">
                <img src={assets.flower} alt="" className="floral" />
                <img src={assets.flower} alt="" className="floral" />
            </div>
            <h2 className="footer-title">Follow us on</h2>
            <ul className="social-icons">
                <li><a href="#"><img src={assets.instagram} alt="Instagram" /></a></li>
                <li><a href="#"><img src={assets.youtube} alt="YouTube" /></a></li>
                <li><a href="#"><img src={assets.twitter} alt="Twitter" /></a></li>
                <li><a href="#"><img src={assets.facebook} alt="Facebook" /></a></li>
                <li><a href="#"><img src={assets.linkedIn} alt="LinkedIn" /></a></li>
            </ul>
        </div>
    )
}

export default Footer

