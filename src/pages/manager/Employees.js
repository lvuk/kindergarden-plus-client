import { Table, Tag } from 'antd';
import React from 'react';

const Employees = () => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => {
        return <Tag color='green'>{role}</Tag>;
      },
    },
  ];

  const data = [
    {
      key: '1',
      firstName: 'Luka',
      lastName: 'Vuk',
      role: 'Teacher',
    },
    {
      key: '2',
      firstName: 'Ivan',
      lastName: 'Ivić',
      role: 'Teacher',
    },
    {
      key: '3',
      firstName: 'Marko',
      lastName: 'Marić',
      role: 'Teacher',
    },
    {
      key: '4',
      firstName: 'Petar',
      lastName: 'Perić',
      role: 'Teacher',
    },
    {
      key: '5',
      firstName: 'Josip',
      lastName: 'Josipović',
      role: 'Teacher',
    },
  ];

  return (
    <div className='employees'>
      <Table columns={columns} dataSource={data} className='table' />
    </div>
  );
};

export default Employees;
