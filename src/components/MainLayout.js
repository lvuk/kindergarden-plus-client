import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import '../stylesheets/index.scss';
import { LayoutContext } from '../pages/context/LayoutContext';
import ContentHeader from './ContentHeader';
import Cookies from 'js-cookie';

const MainLayout = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;

  const checkWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Reset modal state when tab changes
    setIsModalOpen(false);
  }, [activeTab]); // Every time activeTab changes, the modal closes

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      }

      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    if (user?.role === 'MANAGER') {
      setActiveTab('Employees');
    }

    checkWidth();
    // Call handler immediately so state gets updated with initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [user?.role]);

  return (
    <LayoutContext.Provider
      value={{
        isExpanded,
        isMobile,
        error,
        setError,
        isModalOpen,
        setIsModalOpen,
        activeTab,
      }}
    >
      <div className='layout'>
        <Sidebar
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          isMobile={isMobile}
          setIsMobile={setIsMobile}
          setActiveTab={setActiveTab}
        />
        <div
          className={
            isMobile
              ? 'mobile-content'
              : isExpanded
              ? 'content'
              : 'content-sidebar-collapsed'
          }
        >
          <ContentHeader activeTab={activeTab} />
          <Outlet activeTab={activeTab} />
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export default MainLayout;
