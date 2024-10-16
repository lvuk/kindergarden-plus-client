import { Button, Form, Input, Modal, Select, Space, Table, Tag } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { LayoutContext } from '../context/LayoutContext';

const Employees = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const { activeTab, isModalOpen, setIsModalOpen } = useContext(LayoutContext);
  const searchInput = useRef(null);
  const [form] = Form.useForm();

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters, confirm) => {
    clearFilters();
    setSearchText('');
    confirm();
  };

  // FORM
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  // HARDCODED DATA
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters, confirm)}
            size='small'
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      ...getColumnSearchProps('firstName'),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      ...getColumnSearchProps('lastName'),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      filters: [
        {
          text: 'Teacher',
          value: 'Teacher',
        },
        {
          text: 'Other',
          value: 'Other',
        },
      ],
      onFilter: (value, record) => record.role.startsWith(value),
      render: (role) => {
        return <Tag color={role !== 'TEACHER' ? 'green' : ''}>{role}</Tag>;
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

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  return (
    <div className='employees'>
      <Table columns={columns} dataSource={data} className='table' />
      {activeTab === 'Employees' && (
        <Modal
          open={isModalOpen}
          title='Register'
          onCancel={handleCancel}
          footer={null}
          maskClosable={false}
        >
          <Form
            {...formItemLayout}
            variant='filled'
            onFinish={handleSubmit}
            form={form}
          >
            <Form.Item
              label='First Name'
              name='firstName'
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Last Name'
              name='lastName'
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='PIN'
              name='PIN'
              rules={[
                {
                  required: true,
                },
                {
                  pattern: /^[0-9]{11}$/,
                  message: 'PIN must have 11 digits',
                },
              ]}
            >
              <Input type='' />
            </Form.Item>

            <Form.Item
              label='Address'
              name='address'
              rules={[
                {
                  required: true,
                  message: 'Please enter employees address!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Phone number'
              name='phoneNumber'
              rules={[
                {
                  required: true,
                  message: 'Please enter employees phone number!',
                },
                {
                  pattern: /^[0-9]/,
                  message: 'Only digits are allowed',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: "Email can't be empty!",
                },
                {
                  type: 'email',
                  message: 'Please enter a valid email address!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label='Role'
              name='role'
              rules={[{ required: true, message: 'Please select a role!' }]}
            >
              <Select
                style={{ width: 120 }}
                options={[
                  {
                    value: 'TEACHER',
                    label: 'Teacher',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item label='Kindergarden' name='kindergardenId'>
              <Select
                //OVO MORAS PROMIJENTI POSLIJE
                style={{
                  width: 120,
                }}
                options={[
                  {
                    value: 1,
                    label: 'DV Osijek',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              label='Group'
              name='groupId'
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                //OVO MORAS PROMIJENTI POSLIJE
                style={{
                  width: 120,
                }}
                options={[
                  {
                    value: 1,
                    label: 'Zelena',
                  },
                  {
                    value: '2',
                    label: 'Zuta',
                  },
                  {
                    value: '3',
                    label: 'Bijela',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 14,
              }}
            >
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default Employees;
