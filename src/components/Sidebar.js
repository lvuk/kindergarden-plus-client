import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../stylesheets/components/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faBars,
  faBookOpen,
  faCalendarDays,
  faChildReaching,
  faChildren,
  faClipboardList,
  faFolderClosed,
  faHouse,
  faNoteSticky,
  faPeopleGroup,
  faPortrait,
  faSchoolFlag,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCalendar,
  faCreditCard,
  faLightbulb,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import { useUserContext } from '../pages/context/UserContext';

const Sidebar = ({
  isExpanded,
  setIsExpanded,
  isMobile,
  setIsMobile,
  setActiveTab,
}) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  const { user, logout } = useUserContext();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = (e) => {
    console.log(e.currentTarget.getAttribute('name'));
    if (isMobile) {
      setIsExpanded(false); // Only collapse the sidebar if on mobile
    }
    setActiveTab(e.currentTarget.getAttribute('name'));
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
        {(user?.role === 'PARENT' || user?.role === 'TEACHER') && (
          <li>
            <NavLink
              to='/dashboard'
              className='link'
              name='Dashboard'
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faHouse} className='icon' />
              {isExpanded && 'Dashboard'}
            </NavLink>
          </li>
        )}
        {user?.role === 'MANAGER' && (
          <>
            <li>
              <NavLink
                to='/employees'
                className='link'
                name='Employees'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faUserFriends} className='icon' />
                {isExpanded && 'Employees'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/children'
                className='link'
                name='Children'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faChildren} className='icon' />
                {isExpanded && 'Children'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/attendances'
                className='link'
                name='Attendances'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faCalendarDays} className='icon' />
                {isExpanded && 'Attendances'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/groups'
                className='link'
                name='Groups'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faPeopleGroup} className='icon' />
                {isExpanded && 'Groups'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/my-kindergarden'
                className='link'
                name='My Kindergarden'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faSchoolFlag} className='icon' />
                {isExpanded && 'My Kindergarden'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/pedagogical-documents'
                className='link'
                name='Pedagogical Docuements'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faFolderClosed} className='icon' />
                {isExpanded && 'Pedagogical Documents'}
              </NavLink>
            </li>
          </>
        )}
        {user?.role === 'PARENT' && (
          <>
            <li>
              <NavLink
                to='/activities'
                className='link'
                name='Activities'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                {isExpanded && 'Activities'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/resources'
                className='link'
                name='Resources'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faLightbulb} className='icon' />
                {isExpanded && 'Resources'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/payments'
                className='link'
                name='Payments'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faCreditCard} className='icon' />
                {isExpanded && 'Payments'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/profile'
                className='link'
                name='Profile'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faChildReaching} className='icon' />
                {isExpanded && 'Child Profile'}
              </NavLink>
            </li>
          </>
        )}
        {user?.role === 'TEACHER' && (
          <>
            <li>
              <NavLink
                to='/my-group'
                className='link'
                name='My Group'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faChildReaching} className='icon' />
                {isExpanded && 'My Group'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/attendance'
                className='link'
                name='Attendance'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faClipboardList} className='icon' />
                {isExpanded && 'Attendance'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/notes'
                className='link'
                name='Notes'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faNoteSticky} className='icon' />
                {isExpanded && 'Notes'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/work-log'
                className='link'
                name='Work Log'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faBookOpen} className='icon' />
                {isExpanded && 'Work Log'}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/professional-profile'
                className='link'
                name='Professional Profile'
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faPortrait} className='icon' />
                {isExpanded && 'Profile'}
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to='/events'
            className='link'
            name='Events'
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faCalendar} className='icon' />
            {isExpanded && 'Events'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/inbox'
            className='link'
            name='Inbox'
            onClick={handleClick}
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
