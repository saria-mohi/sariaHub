
// import java1 from '../assets/img/Java1.png'; // Make sure to import your vision icon
import java2 from '../assets/img/oop.png'; // Make sure to import your vision icon
import java from '../assets/img/Java1.jpg'; // Make sure to import your vision icon
import web from '../assets/img/html.jpeg'; // Make sure to import your vision icon
import EnrollmentForm from './EnrollmentForm';
import { useState } from 'react';
import './Courses.css';

const CourseCard = ({ title, fees,description, image , lable,enable,offer}) => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const toggleEnrollmentForm = () => {
    setShowEnrollmentForm(!showEnrollmentForm);
  };
  return (
    
    <div className="course-card">

      <div className="card-header">
        <img src={image} alt={`${title}`} className="img" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <h4>Registration Fees: <b>{fees}</b></h4>
        <h4>Offer for Mckinsey Students: <b>{offer}</b></h4>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <button className="enroll-button" disabled={enable} onClick={toggleEnrollmentForm}>
          {lable}
        </button>
      </div>

      {/* Show the enrollment form when the button is clicked */}
      {showEnrollmentForm && <EnrollmentForm onClose={toggleEnrollmentForm} />}
    </div>
  );
};
  const Courses = () => (
    <section className="services">
<div className='enroll-button-container'>
<EnrollButton onClose={EnrollmentForm} /> 
</div>
      {/* Your existing services content */}
      <div className="additional-div">
      {/* <div className="services-cards-container"> */}
        {/* Other service cards */}
        <CourseCard
          title="Java for Beginner"
          fees="30.000 SDG"
          offer = "15.000 SDG"
          description="Introduction to Java programming for beginners."
          image={java}
          lable="enroll"
          enable =""

        />
        <CourseCard
          title="Java Advanced"
          fees="30.000 SDG"
          offer="15.000 SDG"
          description="Advanced concepts and techniques in Java programming."
          image={java2}
          enable ="disabled"
          lable="Close"

        />
        <CourseCard
          title="Web Development"
          fees="30.000 SDG"
          offer = "10.000 SDG"
          description="Building dynamic web applications using HTML, CSS and JS , Bootstrap ."
          image={web}
          lable="enroll"
          enable =""
        />
      </div>
      {/* </div> */}
    </section>
  );
  const EnrollButton = () => {
    const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  
    const toggleEnrollmentForm = () => {
      setShowEnrollmentForm(!showEnrollmentForm);
    };
  
    return (
      <div>
        <button className="enroll-button" onClick={toggleEnrollmentForm}>
          Enroll Now
        </button>
  
        {/* Show the enrollment form when the button is clicked */}
        {showEnrollmentForm && <EnrollmentForm onClose={toggleEnrollmentForm} />}
      </div>
    );
  };
  
  export { Courses, EnrollButton };
  export default Courses;