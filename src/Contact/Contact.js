import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import PopupMessage from './PopupMessage';

import './Contact.css';


const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);

        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          setShowPopup(true);

      
          try {
            const response = await fetch('https://formspree.io/f/xeqyevry', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
                // Successful submission, clear the form
                setFormData({
                  name: '',
                  email: '',
                  message: '',
                });
        
                console.log('Form submitted successfully!');
              } else {
                // Handle error if submission fails
                console.error('Form submission failed.');
              }
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        };
        const closePopup = () => {
            // Close the popup
            setShowPopup(false);
          };
    return (

        <section className="contact">
            <div className="card">
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        {/* <label htmlFor="name">Name:</label> */}
                        <input type="text" id="name" name="name" placeholder='Enter your Name' value={formData.name} onChange={handleChange} required />

                        {/* <label htmlFor="email">Email:</label> */}
                        <input type="email" id="email" name="email" placeholder='enter your Email' value={formData.email} onChange={handleChange} required />

                        {/* <label htmlFor="message">Message:</label> */}
                        <textarea id="message" name="message" rows="4" placeholder='Type your message ...' value={formData.message} onChange={handleChange} required></textarea>

                        <button type="submit">Send</button>
                    </form>
                    {showPopup && <PopupMessage onClose={closePopup} />}

                </div>
            </div>
            <div className="card">
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
            </div>
        </section>

    );
};


export default Contact;
