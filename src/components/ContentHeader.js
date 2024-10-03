import React from 'react';
import '../stylesheets/index.scss';

const ContentHeader = ({ activeTab }) => {
  return (
    <div className='content-header'>
      <h1>{activeTab}</h1>
      <hr />
    </div>
  );
};

export default ContentHeader;
