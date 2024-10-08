import { Descriptions, Tag } from 'antd';
import React from 'react';

const MyKindergardenTab = () => {
  const items = [
    {
      key: '1',
      label: 'Name',
      span: 1,
      children: 'Dječji vrtić Maslačak',
    },
    {
      key: '2',
      label: 'Address',
      span: 3,

      children: 'Sjenjak 32, Osijek, Hrvatska',
    },
    {
      key: '3',
      span: 1,

      label: 'Phone Number',
      children: '031 123 456',
    },
    {
      key: '4',
      span: 3,

      label: 'Email',
      children: 'info@dvos.com',
    },
    {
      key: '5',
      span: 1,

      label: 'My Role',
      children: <Tag color='green'>Teacher</Tag>,
    },
  ];
  return (
    <div>
      <Descriptions title='Kindergarden Info' items={items} />
    </div>
  );
};

export default MyKindergardenTab;
