import React from 'react';
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

const Sidebar = ({ isExpanded, setIsExpanded, isMobile, setIsMobile }) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={
        isMobile
          ? isExpanded
            ? 'sidebar-mobile-expanded'
            : 'sidebar-mobile'
          : isExpanded
          ? 'sidebar-expanded sidebar'
          : 'sidebar-collapsed sidebar'
      }
    >
      <div className={isMobile ? 'mobile-dflex' : 'dflex'}>
        <h1>{(isExpanded || isMobile) && 'Kindergarden+'}</h1>
        <button className='hamburger-button' onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className='icon hamburger-icon' />
        </button>
      </div>
      <ul>
        <li>
          <NavLink to='/dashboard'></NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard'
            className='link'
            onClick={isMobile && handleClick}
          >
            <FontAwesomeIcon icon={faHouse} className='icon' />
            {isExpanded && 'Dashboard'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/events'
            className='link'
            onClick={isMobile && handleClick}
          >
            <FontAwesomeIcon icon={faCalendar} className='icon' />
            {isExpanded && 'Events'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/activities'
            className='link'
            onClick={isMobile && handleClick}
          >
            <FontAwesomeIcon icon={faClipboardList} className='icon' />
            {isExpanded && 'Activities'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/inbox'
            className='link'
            onClick={isMobile && handleClick}
          >
            <FontAwesomeIcon icon={faMessage} className='icon' />
            {isExpanded && 'Inbox'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/resources'
            className='link'
            onClick={isMobile && handleClick}
          >
            <FontAwesomeIcon icon={faLightbulb} className='icon' />
            {isExpanded && 'Resources'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/payments'
            className='link'
            onClick={isMobile && handleClick}
          >
            <FontAwesomeIcon icon={faCreditCard} className='icon' />
            {isExpanded && 'Payments'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            className='link'
            onClick={isMobile && handleClick}
          >
            <FontAwesomeIcon icon={faChildReaching} className='icon' />
            {isExpanded && 'Child Profile'}
          </NavLink>
        </li>
        <li>
          <Link
            to='/login'
            className='logout-link'
            onClick={isMobile && handleClick}
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='icon' />
            {isExpanded && 'Logout'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
