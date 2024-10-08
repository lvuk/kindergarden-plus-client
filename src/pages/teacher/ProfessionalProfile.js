import React from 'react';
import '../../stylesheets/teacher/professional-profile.scss';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Tabs, Descriptions } from 'antd';
import PersonalDataTab from '../../components/teacher/PersonalDataTab';
import QualificationsTab from '../../components/teacher/QualificationsTab';
import MyKindergadenTab from '../../components/teacher/MyKindergardenTab';
import AchievementsTab from '../../components/teacher/AchievementsTab';

const ProfessionalProfile = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Personal data',
      children: <PersonalDataTab />,
    },
    {
      key: '2',
      label: 'Qualifications',
      children: <QualificationsTab />,
    },
    {
      key: '3',
      label: 'My Kindergarden',
      children: <MyKindergadenTab />,
    },
    {
      key: '4',
      label: 'Achievements',
      children: <AchievementsTab />,
    },
  ];
  return (
    <div className='professional-profile'>
      <Avatar shape='square' size={256} icon={<UserOutlined />} />
      <Button className='btn'>Change Photo</Button>
      <Tabs
        defaultActiveKey='1'
        items={items}
        onChange={onChange}
        centered
        className='tabs'
      />
    </div>
  );
};

export default ProfessionalProfile;
