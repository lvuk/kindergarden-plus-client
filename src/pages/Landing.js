import React from 'react';
import Header from '../components/Header';
import '../stylesheets/landing.scss';
import image from '../assets/examples-dashboard.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMessage,
  faClipboard,
  faCalendar,
  faLightbulb,
  faBell,
  faClock,
  faImage,
  faUser,
  faHandshake,
  faNoteSticky,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBookOpen,
  faFileMedical,
  faInfo,
  faLayerGroup,
  faTabletScreenButton,
} from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <>
      <Header />
      <div className='landing-body'>
        <div className='landing-statement'>
          <h1>
            <span>Revolutionize</span> collaboration with a simple, intuitive
            <span> digital</span> platform for <span> parents</span> ,
            educators, and administrators.
          </h1>

          <h2>
            Kindergarden+ makes communication and management incredibly simple
            and efficient, no matter the size of your kindergarten or the number
            of families involved.
          </h2>

          <button className='btn-get-started'>Get started</button>
        </div>
        <br />
        <img src={image} alt='' className='dashboard-image' />
      </div>
      <div className='about'>
        <div className='about-title'>
          <h1>About</h1>
        </div>
        <div className='about-content'>
          <div>
            <h3>
              Kindergarden+ is a digital platform that helps kindergartens
              streamline communication and management. It's a simple, intuitive
              tool that brings parents, educators, and administrators together
              in one place.
            </h3>
            <FontAwesomeIcon icon={faLayerGroup} className='icon' />
          </div>
          <div>
            <FontAwesomeIcon icon={faTabletScreenButton} className='icon' />
            <h3>
              With Kindergarden+, you can send real-time messages, manage
              attendance, schedule events, and much more. It's the perfect way
              to keep everyone in the loop and ensure that your kindergarten
              runs smoothly.
            </h3>
          </div>
        </div>
      </div>
      <div className='services'>
        <h1>Services</h1>
        <div className='card-container'>
          <div className='card'>
            <FontAwesomeIcon icon={faMessage} className='icon' />
            <h3>Real-time messaging</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faClipboard} className='icon' />
            <h3>Attendance</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faClock} className='icon' />
            <h3>Schedule</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faBell} className='icon' />
            <h3>Notifications</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faFileMedical} className='icon' />
            <h3>Health records</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faLightbulb} className='icon' />
            <h3>Upbringing tips</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faCalendar} className='icon' />
            <h3>Events</h3>
          </div>
        </div>

        <div className='card-container'>
          <div className='card'>
            <FontAwesomeIcon icon={faNoteSticky} className='icon' />
            <h3>Digital notes</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faInfo} className='icon' />
            <h3>Informations</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faBookOpen} className='icon' />
            <h3>Digital work diary</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faHandshake} className='icon' />
            <h3>Organize meeting</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faUser} className='icon' />
            <h3>Professional profile</h3>
          </div>
          <div className='card'>
            <FontAwesomeIcon icon={faImage} className='icon' />
            <h3>Upload photos</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
