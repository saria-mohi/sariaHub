import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Logo from '../assets/img/logoWhite.png'; // Make sure to import your logo

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <img src={Logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>            <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
                Email: sariahub@gmail.com</p>
          <p> <FontAwesomeIcon icon={faPhone}/> &nbsp;Phone: +249909166353</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
         <p> <a href="https://web.facebook.com/SARIAHUB/" className="social-icon   ">
            <FontAwesomeIcon icon={faFacebook} />
            &nbsp;
                 Facebook
          </a></p>
         <p> <a href="https://whatsapp.com/channel/0029VaF6J7ACcW4trmB7og1b" className="social-icon">
            <FontAwesomeIcon icon={faWhatsapp} />            &nbsp;

            WhatsApp
          </a></p>
          {/* Replace "1234567890" with your actual WhatsApp number */}
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Website. All rights reserved By SARIAHUB.</p>
      </div>
    </footer>
  );
};

export default Footer;