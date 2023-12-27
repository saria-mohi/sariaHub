
import Courses from '../Courses/Courses';
import {  faGlobe, faLaptopCode, faBookOpen  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';









const Services = () => {
  const [showCoursesDiv, setShowCoursesDiv] = useState(false);

  const handleCoursesClick = () => {
    setShowCoursesDiv(true);
  };

  return (
    <section className="services">
    <div className="services-header">
        <h2>Our Services</h2>
        <p>Welcome to the forefront of digital learning and innovation. At <a href='https://web.facebook.com/SARIAHUB/' target='blank'><b className='different'>SARIAHub</b></a>, we're dedicated to unlocking potential through our diverse range of online courses, tailored to elevate your skills and knowledge in today's competitive landscape. Beyond education, our expertise extends to crafting bespoke digital solutions – from dynamic websites to robust web and mobile applications. Each service is designed with precision and creativity, ensuring your goals are not just met, but exceeded. Partner with us to embark on a journey of learning and digital excellence, where your vision is transformed into reality.</p>
      </div>
      <div className="services-cards-container">
        <div className="service-card course" onClick={handleCoursesClick}>
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
      </div>

      {showCoursesDiv && <Courses />}
    </section>
      );
};
export default Services;