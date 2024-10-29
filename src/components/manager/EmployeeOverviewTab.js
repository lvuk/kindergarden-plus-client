import React from 'react';
import { Avatar, Descriptions, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const EmployeeOverviewTab = () => {
  return (
    <div>
      <Descriptions title='Employee Overview' bordered>
        <Descriptions.Item label='Name'>Test</Descriptions.Item>
        <Descriptions.Item label='Group'>Mali Zeleni</Descriptions.Item>
        <Descriptions.Item label='Position'>Teacher</Descriptions.Item>
        <Descriptions.Item label='Employment Status'>
          <Badge status='success' text='Active' /> {/* Badge style can vary */}
        </Descriptions.Item>
        <Descriptions.Item label='Start Date'>25-01-2021</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default EmployeeOverviewTab;
