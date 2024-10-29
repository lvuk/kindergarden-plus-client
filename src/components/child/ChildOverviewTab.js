import { Statistic } from 'antd';
import React from 'react';

const ChildOverviewTab = () => {
  return (
    <div className='grid-container'>
      <div className='grid-item'>
        <h2>Info</h2>
        <div>
          <b>Name:</b>
          <span> Luka Vuk</span>
        </div>
        <div>
          <b>Birthday:</b>
          <span> 21.01.2024.{'(4 years old)'}</span>
        </div>
        <div>
          <b>Group:</b>
          <span> Mali zeleni</span>
        </div>
        <div>
          <b>Group:</b>
          <span> Mali zeleni</span>
        </div>
      </div>
      <div className='grid-item'>
        <h2>Allergies and Diet</h2>
        <ul>
          <li>Gluten</li>
          <li>Milk</li>
        </ul>
      </div>
      <div className='grid-item'>
        <h2>Attendance</h2>
        <div className='d-flex'>
          <Statistic title='Total days' value={100} />
          <Statistic
            title='Percentage'
            value={100}
            suffix='%'
            precision={2}
            valueStyle={{ color: 'green' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChildOverviewTab;
