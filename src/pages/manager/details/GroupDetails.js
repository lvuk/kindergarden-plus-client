import { Table, Tag } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../stylesheets/manager/details/groups.scss';
import { LayoutContext } from '../../context/LayoutContext';

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const { setActiveTab } = useContext(LayoutContext);
  const navigate = useNavigate();

  useEffect(() => {
    setGroup({
      id: 1,
      name: 'UPDATED2: zerlena grupa',
      kindergardenId: 1,
      createdAt: '2024-08-08T10:30:51.828+00:00',
      updatedAt: '2024-08-27T11:18:22.808+00:00',
      kindergarden: {
        id: 1,
        name: 'Updated DV Osijek',
        address: 'Trg Mladenaca 5',
        createdAt: '2024-08-08T09:33:42.127+00:00',
        updatedAt: '2024-08-08T09:57:28.347+00:00',
        postalCode: '31000',
        city: 'Osijek',
        country: 'Croatia',
        phoneNumber: '573-312',
        email: 'info@dvosijek.com',
      },
      teachers: [
        {
          id: 11,
          firstName: 'Teta',
          lastName: 'Jaca',
          pin: '78184728172',
          role: 'TEACHER',
          address: 'Sjenjak 101',
          postalCode: '31000',
          streetName: 'Sjenjak',
          houseNumber: '101',
          phoneNumber: '949499494949',
          customerId: null,
          email: 'jaca@gmail.com',
          createdAt: '2024-08-09T08:49:56.705+00:00',
          updatedAt: '2024-08-09T08:49:56.705+00:00',
          kindergardenId: 1,
          groupId: 1,
        },
        {
          id: 12,
          firstName: 'Teta',
          lastName: 'Jana',
          pin: '12444123411',
          role: 'TEACHER',
          address: 'Ulica vjekoslava Majera 20',
          postalCode: '31000',
          streetName: 'Ulica vjekoslava majera',
          houseNumber: '20',
          phoneNumber: '44441114411',
          customerId: null,
          email: 'jp@g.com',
          createdAt: '2024-08-09T08:49:56.705+00:00',
          updatedAt: '2024-08-09T08:49:56.705+00:00',
          kindergardenId: 1,
          groupId: 1,
        },
        {
          id: 13,
          firstName: 'Gazda',
          lastName: 'gazda',
          pin: '11232231231',
          role: 'MANAGER',
          address: 'SJENJAK1',
          postalCode: '31111',
          streetName: 'SJENJAK',
          houseNumber: '111',
          phoneNumber: '33311132',
          customerId: null,
          email: 'mg@g.com',
          createdAt: '2024-08-09T08:49:56.705+00:00',
          updatedAt: '2024-08-09T08:49:56.705+00:00',
          kindergardenId: 1,
          groupId: 1,
        },
      ],
    });
  }, [id]);

  const columns = [
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
      render: (group) => {
        return <Tag color='blue'>{group}</Tag>;
      },
    },
  ];

  const childrenData = [
    {
      id: 1,
      firstName: 'Ivan',
      lastName: 'Ivic',
      group: 'Bears',
    },
    {
      id: 2,
      firstName: 'Marko',
      lastName: 'Markovic',
      group: 'Bears',
    },
    {
      id: 3,
      firstName: 'Ana',
      lastName: 'Anic',
      group: 'Bears',
    },
    {
      id: 4,
      firstName: 'Ivana',
      lastName: 'Ivanic',
      group: 'Bears',
    },
  ];

  const handleClick = (record) => {
    navigate(`/children/${record.id}`);
    setActiveTab('Child');
    console.log(record);
  };

  return (
    <div className='group-details'>
      <div className='title'>
        <h1>
          Group name: <b>BEARS</b>
        </h1>
      </div>
      <div className='d-flex'>
        <div className='item'>
          <h2>Teacher #1</h2>
          <h3>
            Name: <b>Luka Vuk</b>
          </h3>
          <h3>
            PIN: <b>8484929484918</b>
          </h3>
        </div>
        <div className='item'>
          <h2>Teacher #2</h2>
          <h3>
            Name: <b>Jane Doe</b>
          </h3>
          <h3>
            PIN: <b>438484719475</b>
          </h3>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={childrenData}
        className='table'
        title={() => <h1>Children</h1>}
        onRow={(record) => {
          return {
            onClick: () => handleClick(record),
          };
        }}
      />
    </div>
  );
};

export default GroupDetails;
