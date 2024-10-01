import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../stylesheets/components/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faBars,
  faBookOpen,
  faChildReaching,
  faClipboardList,
  faHouse,
  faNoteSticky,
  faPortrait,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCalendar,
  faCreditCard,
  faLightbulb,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { useUserContext } from '../pages/context/UserContext';

const Sidebar = ({ isExpanded, setIsExpanded, isMobile, setIsMobile }) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  const { user, logout } = useUserContext();

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

        {user?.role === 'parent' && (
          <>
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
          </>
        )}
        {user?.role === 'teacher' && (
          <>
            <li>
              <NavLink
                to='/my-group'
                className='link'
                onClick={isMobile && handleClick}
              >
                <FontAwesomeIcon icon={faChildReaching} className='icon' />
                {isExpanded && 'My Group'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/notes'
                className='link'
                onClick={isMobile && handleClick}
              >
                <FontAwesomeIcon icon={faNoteSticky} className='icon' />
                {isExpanded && 'Notes'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/work-log'
                className='link'
                onClick={isMobile && handleClick}
              >
                <FontAwesomeIcon icon={faBookOpen} className='icon' />
                {isExpanded && 'Work Log'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/professional-profile'
                className='link'
                onClick={isMobile && handleClick}
              >
                <FontAwesomeIcon icon={faPortrait} className='icon' />
                {isExpanded && 'Profile'}
              </NavLink>
            </li>
          </>
        )}
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
          <Link to='/login' className='logout-link' onClick={logout}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className='icon' />
            {isExpanded && 'Logout'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
