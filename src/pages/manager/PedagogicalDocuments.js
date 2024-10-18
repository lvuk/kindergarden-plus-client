import React, { useContext, useState } from 'react';
import { LayoutContext } from '../context/LayoutContext';
import { Button, Empty, Form, Input, Modal, Select, Space, Table } from 'antd';
import { FaEye } from 'react-icons/fa6';
import '../../stylesheets/manager/pedagogical-documents.scss';

const PedagogicalDocuments = () => {
  const data = [
    {
      key: '1',
      group: 'Bears',
      year: '2021',
      quartal: 'Q1',
      teachers: 'Luka Vuk, Ivan Ivić',
    },
    {
      key: '2',
      group: 'Tigers',
      year: '2021',
      quartal: 'Q1',
      teachers: 'Marko Marić',
    },
  ];

  const [form] = Form.useForm();
  const [filteredData, setFilteredData] = useState(data);
  const columns = [
    { title: 'Group', dataIndex: 'group', key: 'group', width: '25%' },
    { title: 'Year', dataIndex: 'year', key: 'year', width: '25%' },
    { title: 'Quartal', dataIndex: 'quartal', key: 'quartal', width: '15%' },
    { title: 'Teachers', dataIndex: 'teachers', key: 'teachers', width: '25%' },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type='primary' className='btn'>
          <FaEye />
        </Button>
      ),
      width: '10%',
    },
  ];

  // Handle form submission to filter data
  const onFilter = (values) => {
    const { group, year, teacher, quartal } = values;
    let filtered = [...data];

    if (group) {
      filtered = filtered.filter((item) =>
        item.group.toLowerCase().includes(group.toLowerCase())
      );
    }
    if (year) {
      filtered = filtered.filter((item) => item.year === year);
    }
    if (quartal) {
      filtered = filtered.filter((item) => item.quartal === quartal);
    }
    if (teacher) {
      filtered = filtered.filter((item) =>
        item.teachers.toLowerCase().includes(teacher.toLowerCase())
      );
    }

    setFilteredData(filtered); // Update filtered data
  };

  // Handle reset filter
  const onReset = () => {
    form.resetFields(); // Reset form fields
    setFilteredData(data); // Reset to original data
  };

  return (
    <div className='pedagogical-documents'>
      <Form
        form={form}
        layout='inline'
        onFinish={onFilter}
        style={{ marginBottom: '20px', gap: '1rem' }}
      >
        <Form.Item name='group' label='Group'>
          <Input placeholder='Group name' />
        </Form.Item>

        <Form.Item name='year' label='Year/Q'>
          <Select placeholder='Select Year' style={{ width: 100 }} allowClear>
            <Select.Option value='2021'>2021</Select.Option>
            <Select.Option value='2022'>2022</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name='quartal' label='Quartal'>
          <Select
            placeholder='Select Quartal'
            style={{ width: 100 }}
            allowClear
          >
            <Select.Option value='Q1'>Q1</Select.Option>
            <Select.Option value='Q2'>Q2</Select.Option>
            <Select.Option value='Q3'>Q3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name='teacher' label='Teacher'>
          <Input placeholder='Teacher name' />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type='primary' htmlType='submit' className='btn'>
              Filter
            </Button>
            <Button onClick={onReset}>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
      {filteredData.length ? (
        <Table
          columns={columns}
          dataSource={filteredData.length ? filteredData : data}
          className='table'
        />
      ) : (
        <Empty className='empty table' />
      )}
    </div>
  );
};

export default PedagogicalDocuments;
