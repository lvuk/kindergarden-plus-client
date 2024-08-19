import React from 'react';
import '../../stylesheets/parent/dashboard.scss';
import image from '../../assets/diversity.png';
import mathimg from '../../assets/math.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Dashboard = () => {
  return (
    <div className='container'>
      <div className='welcome-back'>
        <div>
          <h1>Welcome back, Parent!</h1>
          <p>
            Today is 19th of August, 2021. You have 3 new notifications and 2
            new messages.
          </p>
        </div>
        {/* <Lottie
          animationData={animationData}
          size={1}
          className='lottie-balls'
        /> */}
        <img src={image} alt='' />
      </div>
      <div className='grid-container'>
        <div className='grid-item'>
          <div className='notifications'>
            <h2>Notifications</h2>
            <div className='notifications-container'>
              <div className='notification'>
                <h1>
                  <FontAwesomeIcon icon={faBell} />
                </h1>
                <div>
                  <p>New event added. Check out in the events tab</p>
                  <p className='time'>2 hours ago</p>
                </div>
              </div>
              <div className='notification'>
                <h1>
                  <FontAwesomeIcon icon={faBell} />
                </h1>
                <div>
                  <p>New event added. Check out in the events tab</p>
                  <p className='time'>2 hours ago</p>
                </div>
              </div>
              <div className='notification'>
                <h1>
                  <FontAwesomeIcon icon={faBell} />
                </h1>
                <div>
                  <p>New event added. Check out in the events tab</p>
                  <p className='time'>2 hours ago</p>
                </div>
              </div>
              <div className='notification'>
                <h1>
                  <FontAwesomeIcon icon={faBell} />
                </h1>
                <div>
                  <p>New event added. Check out in the events tab</p>
                  <p className='time'>2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid-item'>
          <div className='child-progress'>
            <h2>Child's Progress</h2>
            <p>View your child's progress and performance.</p>
          </div>
        </div>
        <div className='grid-item'>
          <h2>Events</h2>
          <div className='event'>
            <h3>31</h3>
            <div className='event-content'>
              <h4>Meeting for excursion</h4>
              <p>Room 205</p>
            </div>
          </div>
        </div>
        <div className='grid-item'>
          <div className='flex'>
            <h2>Next Payment</h2>
            <button className='btn btn-payments'>All payments</button>
          </div>
          <div className='next-payment-due'>
            <h5>21st October 2024.</h5>
          </div>
        </div>
        <div className='grid-item'>
          <h2>Latest Resources</h2>
          <div className='resources-container'>
            <div className='resource'>
              <img src={mathimg} alt='' className='resource-image' />
              <div className='flex resource-flex'>
                <h4>How to learn kids mathematics</h4>
                <p className='resource-description'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  quo autem itaqueed accumus bis, laboriosam rem libero numquam
                  undesse, saepe exceturi ea maiores aut voluptates nihil harum!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='grid-item'>Item 6</div>
      </div>
    </div>
  );
};

export default Dashboard;
