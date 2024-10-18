import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  return (
    <div className='employee-details'>
      <h1>Employee details</h1>
      <pre>{JSON.stringify(employee, null, 2)}</pre>
    </div>
  );
};

export default EmployeeDetails;
