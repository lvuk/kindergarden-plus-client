import React, { useContext } from 'react';
import '../../stylesheets/manager/mykindergarden.scss';
import { Avatar, Button, Descriptions, Modal } from 'antd';
import { FaSchoolFlag } from 'react-icons/fa6';
import { LayoutContext } from '../context/LayoutContext';

const MyKindergarden = () => {
  const { isModalOpen, setIsModalOpen, activeTab } = useContext(LayoutContext);
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

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='my-kindergarden'>
      <Avatar size={256} icon={<FaSchoolFlag />} />
      <Button
        className='btn'
        type='primary'
        onClick={() => setIsModalOpen(true)}
      >
        Edit Kindergarden
      </Button>
      <Descriptions
        title='Kindergarden Info'
        bordered
        className='kindergarden-info'
        items={items}
      />
      {activeTab === 'My Kindergarden' && (
        <Modal
          open={isModalOpen}
          title='Edit kindergarden'
          onCancel={handleCancel}
          footer={null}
        >
          <p>KINDERGARDEn</p>
        </Modal>
      )}
    </div>
  );
};

export default MyKindergarden;
