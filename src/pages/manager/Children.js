import { Button, Form, Input, Modal, Select, Space, Table, Tag } from 'antd';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { LayoutContext } from '../context/LayoutContext';
import { Option } from 'antd/es/mentions';
import DebounceSelect from '../../components/manager/DebounceSelect';
import { useNavigate } from 'react-router-dom';

const Children = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [value, setValue] = useState([]);
  const { isModalOpen, setIsModalOpen, activeTab } = useContext(LayoutContext);
  const searchInput = useRef(null);
  const { setActiveTab } = useContext(LayoutContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    setIsModalOpen(false);
    setActiveTab('Children');
  }, []);

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
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      ...getColumnSearchProps('firstName'),
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      ...getColumnSearchProps('lastName'),
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

  const data = [
    {
      key: '1',
      firstName: 'Luka',
      lastName: 'Vuk',
      group: 'Bears',
    },
    {
      key: '2',
      firstName: 'Ivan',
      lastName: 'Ivić',
      group: 'Bears',
    },
    {
      key: '3',
      firstName: 'Marko',
      lastName: 'Marić',
      group: 'Tigers',
    },
  ];

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
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleSubmit = (values) => {
    console.log(values);
    // setIsModalOpen(false);
  };
  const handleClick = (record) => {
    navigate(`/children/${record.key}`);
    setActiveTab('Child');
    console.log(record);
  };

  const fetchUserList = (lastName) => {
    return fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((body) =>
        body.results.map((user) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.uuid,
        }))
      );
  };

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
    <div>
      <Table
        columns={columns}
        dataSource={data}
        className='table'
        onRow={(record) => {
          return {
            onClick: () => handleClick(record),
          };
        }}
      />
      {activeTab === 'Children' && (
        <Modal
          open={isModalOpen}
          title='Add new child'
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
                  message: "Can't be empty!",
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
                  message: "Can't be empty!",
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
              name='parents'
              label='Parents'
              rules={[
                {
                  required: true,
                  message: 'Please select at least one parent',
                  type: 'array',
                },
              ]}
            >
              <DebounceSelect
                mode='multiple'
                value={value}
                placeholder='Select parents'
                fetchOptions={fetchUserList}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                style={{
                  width: '100%',
                }}
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

export default Children;
