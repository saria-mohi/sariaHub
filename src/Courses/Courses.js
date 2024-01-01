
// import java1 from '../assets/img/Java1.png'; // Make sure to import your vision icon
import java2 from '../assets/img/oop.png'; // Make sure to import your vision icon
import java from '../assets/img/Java1.jpg'; // Make sure to import your vision icon
import web from '../assets/img/html.jpeg'; // Make sure to import your vision icon
import EnrollmentForm from './EnrollmentForm';
import { useState } from 'react';

const CourseCard = ({ title, fees,description, image , lable,enable}) => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  const toggleEnrollmentForm = () => {
    setShowEnrollmentForm(!showEnrollmentForm);
  };
  return (  
    <div className="course-card">
      <div className="card-header">
        <img src={image} alt={` ${title}`} className='img' />
      </div>
      <div className="card-body">
        
        <h3>{title}</h3>
        <h4>Registeration Fees :<b>{fees}</b></h4>
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
}
  const Courses = () => (
    <section className="services">
      {/* Your existing services content */}
      <div className="additional-div">
      {/* <div className="services-cards-container"> */}
        {/* Other service cards */}
        <CourseCard
          title="Java for Beginner"
          fees="30.000 SDG"
          description="Introduction to Java programming for beginners."
          image={java}
          enable ="disabled"
          lable="Close"

        />
        <CourseCard
          title="Java Advanced"
          fees="30.000 SDG"
          description="Advanced concepts and techniques in Java programming."
          image={java2}
          enable ="disabled"
          lable="Close"

        />
        <CourseCard
          title="Web Application"
          fees="10.000 SDG"
          description="Building dynamic web applications using modern technologies."
          image={web}
          lable="Enroll"
          enable =""
        />
      </div>
      {/* </div> */}
    </section>
  );

  export default Courses;