import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/components/header.scss';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <h3>Kindergarden+</h3>
        <ul>
          <li className='anchor'>Home</li>
          <li className='anchor'>Services</li>
          <li className='anchor'>FAQ</li>
          <li className='anchor'>Contact</li>
          <Link to={'/login'} className='link signup-button'>
            Signup
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
