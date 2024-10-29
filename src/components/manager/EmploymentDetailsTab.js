import React from 'react';
import { Descriptions } from 'antd';

const EmploymentDetailsTab = () => {
  return (
    <div>
      <Descriptions title='Employment Details' bordered>
        <Descriptions.Item label='Job Title'>Teacher</Descriptions.Item>
        <Descriptions.Item label='Department'>Mali zeleni</Descriptions.Item>
        <Descriptions.Item label='Employee ID'>123456789</Descriptions.Item>
        <Descriptions.Item label='Manager'>Luka Vuk</Descriptions.Item>
        <Descriptions.Item label='Hire Date'>25-01-2001</Descriptions.Item>
        <Descriptions.Item label='Contract Type'>Neodrejedno</Descriptions.Item>
        <Descriptions.Item label='Probation Status'>
          {false ? 'In Probation' : 'Confirmed'}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default EmploymentDetailsTab;
