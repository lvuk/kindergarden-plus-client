import { Button, Table } from 'antd';
import React, { useContext } from 'react';
import '../../stylesheets/teacher/mygroup.scss';
import { LayoutContext } from '../context/LayoutContext';
import { useNavigate } from 'react-router-dom';

const MyGroup = () => {
  const { setActiveTab } = useContext(LayoutContext);
  const navigate = useNavigate();

  const data = [
    {
      key: 1,
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      key: 2,
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
    },
    {
      key: 3,
      id: 3,
      firstName: 'Marko',
      lastName: 'Mrvica',
    },
    {
      key: 4,

      id: 4,
      firstName: 'JJ',
      lastName: 'Doesa',
    },
    {
      key: 5,

      id: 5,
      firstName: 'Valentina',
      lastName: 'Miletic',
    },
    {
      key: 6,

      id: 6,
      firstName: 'Mateo',
      lastName: 'Telefon',
    },
    {
      key: 7,

      id: 7,
      firstName: 'Nest',
      lastName: 'Gattuso',
    },
    {
      key: 8,

      id: 8,
      firstName: 'Bruno',
      lastName: 'Petkovic',
    },
    {
      key: 9,

      id: 9,
      firstName: 'Luka',
      lastName: 'Matas',
    },
    {
      key: 10,
      id: 10,
      firstName: 'Vedran',
      lastName: 'Jugovic',
    },
  ];

  const handleClick = (record) => {
    navigate(`/my-group/children/${record.id}`);
    setActiveTab('Child');
    console.log(record);
  };

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
        <Button onClick={() => handleClick(record)} className='btn'>
          View Profile
        </Button>
      ),
    },
  ];

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
