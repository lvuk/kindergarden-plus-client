import React from 'react';
import '../../stylesheets/parent/childProfile.scss';
import profileImage from '../../assets/test-profile-image.jpeg';
import { Hr } from '@react-email/hr';

const ChildProfile = () => {
  return (
    <div className='child-profile-container'>
      <div className='child-profile-header'>
        <h1>Profile</h1>
        <img src={profileImage} alt='' className='profile-image' />
        <div>
          <h3>John Doe</h3>
          <h3>2 years old (24.10.2022)</h3>
        </div>
      </div>
      <div className='child-profile-body'>
        <div className='child-profile-container'>
          <h2>Basic Info</h2>
          <p>Group: Zelena grupa (Predskolski)</p>
          <p>Teachers: JJ & KK</p>
          <p>Parents: Jane Doe & Test test</p>
          <p>Mom: 09950999322</p>
          <p>PIN: 506644029212</p>
          <p>Address: Test address</p>
        </div>
        <div className='child-profile-container'>
          <h2>Health Record</h2>
          <p>Height: 100cm</p>
          <p>Weight: 20kg</p>
          <p>Shoe size: 30</p>
          <p>Health issues: None</p>
        </div>
        <div className='child-profile-container'>
          <h2>Attendance</h2>
          <p>This week: 100%</p>
          <p>This month: 95%</p>
          <p>This year: 93%</p>
        </div>
      </div>
    </div>
  );
};

export default ChildProfile;
