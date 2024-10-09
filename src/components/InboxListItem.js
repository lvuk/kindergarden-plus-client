import { Avatar } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const InboxListItem = () => {
  return (
    <div className='inbox-list-item'>
      <Avatar size={48} icon={<UserOutlined />} />
      <div>
        <div className='inbox-list-item-name'>John Doe</div>
        <div className='inbox-list-item-message'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
};

export default InboxListItem;
