import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGlobe, faLaptopCode, faBookOpen,faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

import './App.css'; // Your CSS file to style the components
import Logo from './assets/img/Sariahub.png'; // Make sure to import your logo
import background from './assets/img/Sariahub.png'; // Make sure to import your background image
import mission from './assets/img/mission.png'; // Make sure to import your mission icon
import vision from './assets/img/vission.png'; // Make sure to import your vision icon

import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <img src={Logo} alt="Logo" />
            <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
              {/* Icon can be an SVG or emoji */}
              {isMobileMenuOpen ? '✖' : '☰'}
            </button>
            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>

              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>
        </header>

        {/* Wrap Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <section className="hero">
    <div className="hero-image">
      <img src={background} alt="Hero" />
    </div>
    <div className="divider"></div>
    <div className="hero-content">
      <h1>Welcome to Our Online Courses</h1>
      <p>Expand your horizons with our expert-taught courses.</p>
      <button className="cta-button">Explore Courses</button>
    </div>
  </section>
);



const About = () => (
  <section className="about">
    <div className="card">
      <img src={mission} alt="Mission Icon" className="card-icon" />
      <h2>Mission</h2>
      <p>Our mission is to empower individuals and businesses through top-tier online education and cutting-edge web solutions. We are dedicated to providing comprehensive online courses that enhance skills and knowledge in various domains. Simultaneously, we excel in delivering professional, innovative web services, including website and web application development, to drive digital transformation and success for our clients.</p>
    </div>
    <div className="card">
      <img src={vision} alt="Vision Icon" className="card-icon" />
      <h2>Vision</h2>
      <p>Our vision is to become a leading provider in the digital education and web services industry, recognized for our commitment to excellence and our ability to evolve with technological advancements. We aspire to create a global community where learning is accessible to all, and digital solutions are seamlessly integrated to meet the dynamic needs of businesses and individuals alike.</p>
    </div>
  </section>
);


const Services = () => (
  <section className="services">
     <div className="services-header">
      <h2>Our Services</h2>
      <p>Welcome to the forefront of digital learning and innovation. At <a href='https://web.facebook.com/SARIAHUB/' target='blank'><b className='different'>SARIAHub</b></a>, we're dedicated to unlocking potential through our diverse range of online courses, tailored to elevate your skills and knowledge in today's competitive landscape. Beyond education, our expertise extends to crafting bespoke digital solutions – from dynamic websites to robust web and mobile applications. Each service is designed with precision and creativity, ensuring your goals are not just met, but exceeded. Partner with us to embark on a journey of learning and digital excellence, where your vision is transformed into reality.</p>
    </div>
    <div className="services-cards-container">
    <div className="service-card course">
      <FontAwesomeIcon icon={faBookOpen} className="service-icon" />
      <h3>Courses</h3>
      <p>Description of your online courses service.</p>
    </div>
    <div className="service-card webSite">
      <FontAwesomeIcon icon={faGlobe} className="service-icon" />
      <h3>Website Development</h3>
      <p>Description of your website development service.</p>
    </div>
    <div className="service-card webAppilcation">
      <FontAwesomeIcon icon={faLaptopCode} className="service-icon" />
      <h3>Web Application</h3>
      <p>Description of your web application service.</p>
    </div>
    {/* <div className="service-card">
      <FontAwesomeIcon icon={faMobileAlt} className="service-icon" />
      <h3>Mobile App Development</h3>
      <p>Description of your mobile app development service.</p>
    </div> */}
    </div>  
  </section>
);


const Contact = () => (
  <section className="contact-us">
    <div className="contact-card">
      <div className="contact-option">
      <FontAwesomeIcon icon={faPhone} className="contact-icon phone-icon" />
        <span><a href="tel:+249909166353">Call Us</a></span> {/* Your phone number */}
      </div>
      <div className="contact-option ">
      <FontAwesomeIcon icon={faEnvelope} className="contact-icon email-icon" />
        <span><a href='mailto:sariahub@gmial.com' >Send Email for Us</a></span> {/* Your email */}
      </div>
      <div className="contact-option" >      

        <FontAwesomeIcon icon={faWhatsapp} className="contact-icon whatsapp-icon" />
        <span><a href="https://whatsapp.com/channel/0029VaF6J7ACcW4trmB7og1b" target='blank'>SARIA HUB</a></span> {/* Your WhatsApp number */}
      </div>
      <div className="contact-option" >
        <FontAwesomeIcon icon={faFacebook} className="contact-icon facebook-icon" />
        <a href="https://web.facebook.com/SARIAHUB/" target="_blank" rel="noopener noreferrer">SARIA HUB</a> {/* Your Facebook page */}
      </div>
    </div>
  </section>
);



export default App;
