import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../stylesheets/components/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faBars,
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

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={
        isExpanded ? 'sidebar-expanded sidebar' : 'sidebar-collapsed sidebar'
      }
    >
      <div className='dflex'>
        <h1>{isExpanded && 'Kindergarden+'}</h1>
        <button className='hamburger-button' onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className='icon' />
        </button>
      </div>
      <ul>
        <li>
          <NavLink to='/dashboard'></NavLink>
        </li>
        <li>
          <NavLink to='/dashboard' className='link'>
            <FontAwesomeIcon icon={faHouse} className='icon' />
            {isExpanded && 'Dashboard'}
          </NavLink>
        </li>
        <li>
          <NavLink to='/events' className='link'>
            <FontAwesomeIcon icon={faCalendar} className='icon' />
            {isExpanded && 'Events'}
          </NavLink>
        </li>
        <li>
          <NavLink to='/activities' className='link'>
            <FontAwesomeIcon icon={faClipboardList} className='icon' />
            {isExpanded && 'Activities'}
          </NavLink>
        </li>
        <li>
          <NavLink to='/inbox' className='link'>
            <FontAwesomeIcon icon={faMessage} className='icon' />
            {isExpanded && 'Inbox'}
          </NavLink>
        </li>
        <li>
          <NavLink to='/resources' className='link'>
            <FontAwesomeIcon icon={faLightbulb} className='icon' />
            {isExpanded && 'Resources'}
          </NavLink>
        </li>
        <li>
          <NavLink to='/payments' className='link'>
            <FontAwesomeIcon icon={faCreditCard} className='icon' />
            {isExpanded && 'Payments'}
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile' className='link'>
            <FontAwesomeIcon icon={faChildReaching} className='icon' />
            {isExpanded && 'Child Profile'}
          </NavLink>
        </li>
        <li>
          <Link to='/login' className='logout-link'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='icon' />
            {isExpanded && 'Logout'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
