import { Button, Space, Table, Modal, Form, Input } from 'antd';
import '../../stylesheets/manager/groups.scss';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;

const Groups = () => {
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const [form] = Form.useForm(); // Create form instance
  const showModal = (record) => {
    setRecord(record);
    form.setFieldsValue(record); // Set form values when modal opens
    setOpen(true);
  };

  const showDeleteConfirm = () => {
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
  };
  const handleCancel = () => {
    form.resetFields(); // Reset form when modal is closed
    setOpen(false);
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
          <Button className='btn btn-edit' onClick={() => showModal(record)}>
            <FaEdit />
          </Button>
          <Button onClick={showDeleteConfirm} className='btn btn-delete'>
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

  return (
    <div className='groups'>
      <Table columns={columns} dataSource={data} className='table' />
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
          layout='vertical'
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
    </div>
  );
};

export default Groups;
