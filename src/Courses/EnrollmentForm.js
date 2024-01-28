import React, { useState } from 'react';
import PopupMessage from '../Contact/PopupMessage';
import './Courses.css';
const EnrollmentForm = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    phone: '',
    course: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPopup(true);

    try {
      const response = await fetch('https://formspree.io/f/xdoqaylp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Successful submission, clear the form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          id: '',
          phone: '',
          course: '',
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
      <button className="close-button" onClick={closePopup}>
        X
      </button>
      <form onSubmit={handleSubmit}>
        <h3>Registration Form</h3>
        <div className="form-row">
          <div className="form-group">
            {/* <label htmlFor="firstName">First Name:</label> */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="lastName">Last Name:</label> */}
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="id">ID:</label> */}
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Enter your Mckinsey ID"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            {/* <label htmlFor="course">Select Course:</label> */}
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a Course</option>
              <option value="java">Java</option>
              <option value="web">Web development</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            {/* <label htmlFor="phone">Phone:</label> */}
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      {showPopup && <PopupMessage onClose={closePopup} />}
    </div>
  );
};

export default EnrollmentForm;