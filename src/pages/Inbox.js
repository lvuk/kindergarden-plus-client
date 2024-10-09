import React from 'react';
import '../stylesheets/inbox.scss';
import { Divider } from 'antd';
import InboxListItem from '../components/InboxListItem';

const Inbox = () => {
  return (
    <div className='inbox'>
      <div className='inbox-list'>
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
        <InboxListItem />
      </div>
      <Divider
        type='vertical'
        style={{ borderColor: 'gray', minHeight: '87vh', height: 'auto' }}
      />
      <div className='messages'>Messages</div>
    </div>
  );
};

export default Inbox;
