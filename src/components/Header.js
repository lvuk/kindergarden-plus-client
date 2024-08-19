import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/components/header.scss';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <h3>Kindergarden+</h3>
        <ul>
          <li to={'/'}>
            <a href='#home' className='anchor'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='anchor'>
              About
            </a>
          </li>
          <li>
            <a href='#services' className='anchor'>
              Services
            </a>
          </li>
          <li>
            <a href='#FAQ' className='anchor'>
              FAQ
            </a>
          </li>
          <li>
            <a href='#contact' className='anchor'>
              Contact
            </a>
          </li>
          <Link to={'/login'} className='signup-button'>
            Signup
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
