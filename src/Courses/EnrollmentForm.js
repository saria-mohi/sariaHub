import React, { useState } from 'react';
import PopupMessage from '../Contact/PopupMessage';

const EnrollmentForm = ({ onClose }) => {

    const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState({
      name: '',
      email: '',
        phone: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setShowPopup(true);
      //onClose();

  
      try {
        const response = await fetch('https://formspree.io/f/xqkrzvao', {
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
                  phone: '',
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
        onClose();
      };
    
  
    return (
      <div className="enrollment-modal">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">Name:</label> */}
          <input type="text" id="name" name="name" placeholder='Enter your Name' value={formData.name} onChange={handleChange} required />
  
          {/* <label htmlFor="email">Email:</label> */}
          <input type="email" id="email" name="email" placeholder='Enter your Email' value={formData.email} onChange={handleChange} required />
  
          
          {/* <label htmlFor="phone">Phone:</label> */}
          <input type="tel" id="phone" name="phone" placeholder='enter your Phone' value={formData.phone} onChange={handleChange} required />
  
          <button type="submit">Register</button>
        </form>
        {showPopup && <PopupMessage onClose={closePopup} />}

      </div>
    );
  };
  export default EnrollmentForm;