import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='layout'>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={isExpanded ? 'content' : 'content-sidebar-collapsed'}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
