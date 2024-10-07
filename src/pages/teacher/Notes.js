import React, { useState } from 'react';
import '../../stylesheets/teacher/notes.scss';
import { Button, Form, Input, Modal, Space, Table } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { FaEye, FaPlus, FaTrashCan } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import moment from 'moment';
import TextArea from 'antd/es/input/TextArea';

const { confirm } = Modal;

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [form] = Form.useForm(); // Create form reference
  const [isShowMode, setIsShowMode] = useState(false);
  const [record, setRecord] = useState(null);
  const [values, setValues] = useState({
    noteTitle: '',
    noteBody: '',
    updatedAt: '',
  });

  const handleNewModal = () => {
    form.resetFields(); // Reset the form fields
    setValues({
      noteTitle: '',
      noteBody: '',
    });
    setOpen(true);
    setModalTitle('New Note');
  };

  const showDeleteConfirm = (record) => {
    confirm({
      title: 'Do you want to delete this note?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const showNoteModal = (record) => {
    setIsShowMode(true);
    setRecord(record);
    setOpen(true);
    setValues({
      noteTitle: record.noteTitle,
      noteBody: record.noteBody,
      updatedAt: record.updatedAt,
    });
    setModalTitle(record.noteTitle);
    form.setFieldsValue(record);
  };

  const editNoteModal = (record) => {
    setModalTitle('Edit Note');
    const updatedValues = {
      noteTitle: record.noteTitle,
      noteBody: record.noteBody,
      updatedAt: moment().format('DD-MM-YYYY'),
    };
    setValues(updatedValues);
    setOpen(true);
    form.setFieldsValue(updatedValues); // Set the form values for editing
  };

  const handleCancel = () => {
    setIsShowMode(false);
    setOpen(false);
    form.resetFields(); // Reset the form when the modal is closed
    setValues({
      noteTitle: '',
      noteBody: '',
      updatedAt: '',
    });
  };

  const columns = [
    {
      title: 'Note',
      dataIndex: 'noteTitle',
      key: 'noteTitle',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      defaultSortOrder: 'descend',
      sorter: (a, b) =>
        moment(a.updatedAt, 'DD-MM-YYYY').unix() -
        moment(b.updatedAt, 'DD-MM-YYYY').unix(),
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='small'>
          <Button
            type='primary'
            className='btn'
            onClick={() => showNoteModal(record)}
          >
            <FaEye />
          </Button>
          <Button
            type='primary'
            className='btn btn-edit'
            onClick={() => editNoteModal(record)}
          >
            <FaEdit />
          </Button>
          <Button
            type='danger'
            className='btn btn-delete'
            onClick={() => showDeleteConfirm(record)}
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
      noteTitle: 'John Brown',
      noteBody: 'This is a note',
      createdAt: '2021-10-10',
      updatedAt: '2021-10-11',
    },
    {
      key: '2',
      noteTitle: 'Jim Green',
      noteBody: 'This is a note',

      createdAt: '2021-10-10',
      updatedAt: '2021-10-12',
    },
    {
      key: '3',
      noteTitle: 'Joe Black',
      noteBody: 'This is a note',

      createdAt: '2021-10-10',
      updatedAt: '2021-10-13',
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
    <div className='notes'>
      <div>
        <Button type='primary' className='btn' onClick={handleNewModal}>
          <FaPlus /> New note
        </Button>
      </div>

      <Table columns={columns} dataSource={data} className='table' />
      <Modal
        open={open}
        title={modalTitle}
        footer={null}
        onCancel={handleCancel}
      >
        {!isShowMode ? (
          <Form variant='filled' layout='vertical' form={form}>
            <Form.Item label='Title' name='noteTitle'>
              <Input />
            </Form.Item>
            <Form.Item label='Body' name='noteBody'>
              <TextArea />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Save
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <p>{record.noteBody}</p>
        )}
      </Modal>
    </div>
  );
};

export default Notes;
