import { Button, Space, Table, Modal, Form, Input } from 'antd';
import '../../stylesheets/manager/groups.scss';
import React, { useContext, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { LayoutContext } from '../context/LayoutContext';
import DebounceSelect from '../../components/manager/DebounceSelect';
import { useNavigate } from 'react-router-dom';
const { confirm } = Modal;

const Groups = () => {
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const { activeTab, isModalOpen, setIsModalOpen } = useContext(LayoutContext);
  const [value, setValue] = useState([]);
  const navigate = useNavigate();
  const { setActiveTab } = useContext(LayoutContext);
  const [form] = Form.useForm(); // Create form instance
  const [createForm] = Form.useForm(); // Create form instance

  const showModal = (event, record) => {
    setRecord(record);
    form.setFieldsValue(record); // Set form values when modal opens
    setOpen(true);
    event.stopPropagation();
  };

  useEffect(() => {
    setActiveTab('Groups');
  }, [setActiveTab]);

  const showDeleteConfirm = (event) => {
    confirm({
      title: 'Are you sure delete this group?',
      icon: <ExclamationCircleFilled />,
      content: 'You will permanently delete this group.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
    event.stopPropagation();
  };
  const handleCancel = () => {
    form.resetFields(); // Reset form when modal is closed
    setOpen(false);
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: 'Group ID',
      dataIndex: 'groupId',
      key: 'groupId',
    },
    {
      title: 'Group Name',
      dataIndex: 'groupName',
      key: 'groupName',
    },
    {
      title: 'Teachers',
      dataIndex: 'teachers',
      key: 'teachers',
    },
    {
      title: 'Number of Children',
      dataIndex: 'numberOfChildren',
      key: 'numberOfChildren',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='small'>
          <Button
            className='btn btn-edit'
            onClick={(e) => showModal(e, record)}
          >
            <FaEdit />
          </Button>
          <Button
            onClick={(e) => showDeleteConfirm(e)}
            className='btn btn-delete'
          >
            <FaTrashCan />
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      groupId: '1',
      groupName: 'Bears',
      teachers: 'Luka Vuk',
      numberOfChildren: '2',
    },
    {
      key: '2',
      groupId: '2',
      groupName: 'Tigers',
      teachers: 'Ivan Ivić',
      numberOfChildren: '1',
    },
    {
      key: '3',
      groupId: '3',
      groupName: 'Dolphins',
      teachers: 'Marko Marić',
      numberOfChildren: '3',
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

  const handelNewGroupCancel = () => {
    setIsModalOpen(false);
    createForm.resetFields();
  };

  const handleClick = (record) => {
    navigate(`/groups/${record.key}`);
    setActiveTab('Group');
    console.log(record);
  };

  const fetchTeachersList = (lastName) => {
    return fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((body) =>
        body.results.map((user) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.uuid,
        }))
      );
  };

  return (
    <div className='groups'>
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
      <Modal
        open={open}
        title='Edit Group'
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...formItemLayout}
          form={form}
          initialValues={record}
          layout='inline'
        >
          <Form.Item
            label='Name'
            name='groupName'
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' className='btn'>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {activeTab === 'Groups' && (
        <Modal
          open={isModalOpen}
          title='Create new group'
          onCancel={handelNewGroupCancel}
          footer={null}
        >
          <Form {...formItemLayout} open={isModalOpen} form={createForm}>
            <Form.Item
              label='Name'
              name='name'
              rules={[
                {
                  required: true,
                  message: "Can't be empty!",
                },
              ]}
            >
              <Input placeholder='Enter group name' />
            </Form.Item>

            <Form.Item
              name='parents'
              label='Parents'
              rules={[
                {
                  required: true,
                  message: 'Please select at least one teacher',
                  type: 'array',
                },
              ]}
            >
              <DebounceSelect
                mode='multiple'
                value={value}
                placeholder='Select parents'
                fetchOptions={fetchTeachersList}
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

export default Groups;
