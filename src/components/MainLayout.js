import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
