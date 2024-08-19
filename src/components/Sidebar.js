import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../stylesheets/components/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faChildReaching,
  faClipboardList,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCalendar,
  faCreditCard,
  faLightbulb,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1>Kindergarden+</h1>
      <ul>
        <li>
          <NavLink to='/dashboard'></NavLink>
        </li>
        <li>
          <NavLink to='/dashboard' className='link'>
            <FontAwesomeIcon icon={faHouse} className='icon' />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/events' className='link'>
            <FontAwesomeIcon icon={faCalendar} className='icon' />
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to='/activities' className='link'>
            <FontAwesomeIcon icon={faClipboardList} className='icon' />
            Activities
          </NavLink>
        </li>
        <li>
          <NavLink to='/inbox' className='link'>
            <FontAwesomeIcon icon={faMessage} className='icon' />
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink to='/resources' className='link'>
            <FontAwesomeIcon icon={faLightbulb} className='icon' />
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink to='/payments' className='link'>
            <FontAwesomeIcon icon={faCreditCard} className='icon' />
            Payments
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile' className='link'>
            <FontAwesomeIcon icon={faChildReaching} className='icon' />
            Child Profile
          </NavLink>
        </li>
        <li>
          <Link to='/login' className='logout-link'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='icon' />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
