import React, { useContext } from 'react';
import '../stylesheets/index.scss';
import { Button } from 'antd';
import { FaPlus } from 'react-icons/fa6';
import { useUserContext } from '../pages/context/UserContext';

const ContentHeader = ({ activeTab }) => {
  const { user } = useUserContext();

  return (
    <div className='content-header'>
      <div className='content-container'>
        <h1>{activeTab}</h1>
        {activeTab === 'Children' && user.role === 'MANAGER' && (
          <Button className='btn'>
            <FaPlus />
            Add new child
          </Button>
        )}
        {activeTab === 'Groups' && user.role === 'MANAGER' && (
          <Button className='btn'>
            <FaPlus />
            Add new group
          </Button>
        )}
        {activeTab === 'Events' &&
          (user.role === 'MANAGER' || user.role === 'TEACHER') && (
            <Button className='btn'>
              <FaPlus />
              Add new event
            </Button>
          )}

        {activeTab === 'Notes' && user.role === 'TEACHER' && (
          <Button className='btn'>
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
