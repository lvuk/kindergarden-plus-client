import React from 'react';
import '../../stylesheets/manager/mykindergarden.scss';
import { Avatar, Button, Descriptions } from 'antd';
import { FaSchoolFlag } from 'react-icons/fa6';

const MyKindergarden = () => {
  const items = [
    {
      key: '1',
      label: 'Name',
      children: 'DV Osijek',
    },
    {
      key: '2',
      label: 'Address',
      children: 'Sjenjak 32',
    },
    {
      key: '3',
      label: 'Postal Code',
      children: '31000',
    },
    {
      key: '4',
      label: 'City',
      children: 'Osijek',
    },
    {
      key: '5',
      label: 'Country',
      children: 'Croatia',
    },
    {
      key: '6',
      label: 'Phone Number',
      children: '+87834874984',
    },
    {
      key: '7',
      label: 'Email',
      children: 'dvosijek@dv.com',
    },
    {
      key: '8',
      label: 'Manager',
      children: 'John Doe',
    },
  ];

  return (
    <div className='my-kindergarden'>
      <Avatar size={256} icon={<FaSchoolFlag />} />
      <Button className='btn' type='primary'>
        Edit Kindergarden
      </Button>
      <Descriptions
        title='Kindergarden Info'
        bordered
        className='kindergarden-info'
        items={items}
      />
    </div>
  );
};

export default MyKindergarden;
