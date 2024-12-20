import { Avatar, Button, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import '../../../stylesheets/manager/details/employee.scss';
import PersonalDataTab from '../../../components/teacher/PersonalDataTab';
import EmployeeOverviewTab from '../../../components/manager/EmployeeOverviewTab';
import EmploymentDetailsTab from '../../../components/manager/EmploymentDetailsTab';
import NotesAndCommentsTab from '../../../components/manager/NotesAndCommentsTab';

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // const fetchEmployee = async () => {
    //   const response = await fetch(`/api/employees/${id}`);
    //   const data = await response.json();
    //   setEmployee(data);
    setEmployee({
      id: 14,
      firstName: 'Teacher',
      lastName: 'Test',
      pin: '12346728192',
      role: 'TEACHER',
      address: 'Sjenjak 101',
      postalCode: '31000',
      streetName: 'Sjenjak',
      houseNumber: '101',
      phoneNumber: '0995099733',
      customerId: null,
      email: 'test@teacher.com',
      createdAt: '2024-10-09T09:59:00.385+00:00',
      updatedAt: '2024-10-10T07:43:15.953+00:00',
      kindergardenId: 1,
      groupId: 1,
    });
    // };
  }, [id]); // Trigger the effect when `id` changes

  const tabs = [
    {
      key: '1',
      label: 'Overview',
      children: <EmployeeOverviewTab />,
    },
    {
      key: '2',
      label: 'Personal information',
      children: <PersonalDataTab />,
    },
    {
      key: '3',
      label: 'Employment Details',
      children: <EmploymentDetailsTab />,
    },
    {
      key: '4',
      label: 'Notes and comments',
      children: <NotesAndCommentsTab />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className='employee-details'>
      <Avatar shape='square' size={256} icon={<UserOutlined />} />
      <h2>First Name Last Name</h2>
      <Tabs
        defaultActiveKey='1'
        items={tabs}
        onChange={onChange}
        centered
        className='tabs'
      />
    </div>
  );
};

export default EmployeeDetails;
