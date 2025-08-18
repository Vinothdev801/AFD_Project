import React from 'react'
import './Footer.css';
import Fb from '../Social-Icons/Fb';
import Insta from '../Social-Icons/Insta';
import X from '../Social-Icons/Twitter';

const Footer = () => {
  return (
    <footer id='footer'>
        <div className="footer-container">
            <div className="contact">
                <h2>Contact Us</h2>
                <ul>
                    <li>1234 Market St,<br/> springfield, USA.</li>
                    <li>(123) 456-7890</li>
                    <li>info@farmersmarket.com</li>
                    <li></li>
                </ul>
            </div>
            <div className="more-info">
                <h2>More Info</h2>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Shipping Policy</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div className="help">
                <h2>Need Help</h2>
                <ul>
                    <li>Track Order</li>
                    <li>Returns & Refunds</li>
                    <li> FAQ's</li>
                </ul>
            </div>
            <div className="location">
                <h2>location</h2>
                <ul>
                    <li>India</li>
                    <li>Russia</li>
                    <li>USA</li>
                    <li>China</li>
                </ul>
            </div>
        </div>
        <div className="social-icons">
            <a href="/fb"><Fb/></a>
            <a href="/insta"><Insta/></a>
            <a href="twitter"><X/> </a>
        </div>
        <div className="copy">
            &copy; Farmers Market. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer