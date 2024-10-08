import { Badge, Descriptions } from 'antd';
import React from 'react';

const PersonalDataTab = () => {
  const items = [
    {
      key: '1',
      label: 'Full Name',
      children: 'Luka Vuk',
    },
    {
      key: '2',
      label: 'PIN',
      children: '5067274874',
    },
    {
      key: '3',
      label: 'Phone Number',
      children: '0994931951',
    },
    {
      key: '4',
      label: 'Email',
      children: 'luka.vuk456@gmail.com',
    },
    {
      key: '5',
      label: 'Address',
      children: 'Sjenjak 101',
    },
    {
      key: '6',
      label: 'Status',
      children: <Badge status='success' text='Active' />,
    },
  ];
  return (
    <div>
      <Descriptions title='User Info' items={items} />
    </div>
  );
};

export default PersonalDataTab;
