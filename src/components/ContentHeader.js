import React, { useContext } from 'react';
import '../stylesheets/index.scss';
import { Button } from 'antd';
import { FaPlus } from 'react-icons/fa6';
import { useUserContext } from '../pages/context/UserContext';
import { LayoutContext } from '../pages/context/LayoutContext';

const ContentHeader = ({ activeTab }) => {
  const { user } = useUserContext();
  const { isModalOpen, setIsModalOpen } = useContext(LayoutContext);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='content-header'>
      <div className='content-container'>
        <h1>{activeTab}</h1>
        {activeTab === 'Children' && user.role === 'MANAGER' && (
          <Button className='btn' onClick={handleClick}>
            <FaPlus />
            Add new child
          </Button>
        )}
        {activeTab === 'Employees' && user.role === 'MANAGER' && (
          <Button className='btn' onClick={handleClick}>
            <FaPlus />
            Register new employee
          </Button>
        )}
        {activeTab === 'Groups' && user.role === 'MANAGER' && (
          <Button className='btn' onClick={handleClick}>
            <FaPlus />
            Add new group
          </Button>
        )}
        {activeTab === 'Events' &&
          (user.role === 'MANAGER' || user.role === 'TEACHER') && (
            <Button className='btn' onClick={handleClick}>
              <FaPlus />
              Add new event
            </Button>
          )}

        {activeTab === 'Notes' && user.role === 'TEACHER' && (
          <Button className='btn' onClick={handleClick}>
            <FaPlus />
            Add new note
          </Button>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ContentHeader;
