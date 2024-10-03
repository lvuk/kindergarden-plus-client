import { Button, Table } from 'antd';
import React from 'react';
import '../../stylesheets/teacher/mygroup.scss';

const MyGroup = () => {
  const data = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
    },
    {
      id: 3,
      firstName: 'Marko',
      lastName: 'Mrvica',
    },
    {
      id: 4,
      firstName: 'JJ',
      lastName: 'Doesa',
    },
    {
      id: 5,
      firstName: 'Valentina',
      lastName: 'Miletic',
    },
    {
      id: 6,
      firstName: 'Mateo',
      lastName: 'Telefon',
    },
    {
      id: 7,
      firstName: 'Nest',
      lastName: 'Gattuso',
    },
    {
      id: 8,
      firstName: 'Bruno',
      lastName: 'Petkovic',
    },
    {
      id: 9,
      firstName: 'Luka',
      lastName: 'Matas',
    },
    {
      id: 10,
      firstName: 'Vedran',
      lastName: 'Jugovic',
    },
  ];

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: 'Action',
      render: (record) => (
        <Button onClick={() => handleViewClick(record)} className='btn'>
          View Profile
        </Button>
      ),
    },
  ];

  const handleViewClick = (record) => {
    console.log(record);
    console.log('View clicked');
  };

  return (
    <div className='mygroup'>
      <Table
        dataSource={data}
        columns={columns}
        className='table'
        size='small'
      />
    </div>
  );
};

export default MyGroup;
