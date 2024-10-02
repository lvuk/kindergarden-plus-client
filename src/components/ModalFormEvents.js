import { Button, Form, DatePicker, Modal, Input } from 'antd';
import moment from 'moment';
import React from 'react';
const { RangePicker } = DatePicker;

const ModalFormEvents = ({
  handleCancel,
  onFinish,
  isModalOpen,
  record,
  setRecord,
}) => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Enter the date range',
      },
    ],
  };

  return (
    <Modal
      title='Edit Event'
      centered
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        onFinish={onFinish}
        initialValues={{
          title: record?.title, // Set initial title value
          'range-time-picker': record
            ? [moment(record.start), moment(record.end)] // Set initial date range
            : [], // Ensure a default empty value if no record
        }}
      >
        <Form.Item
          {...formItemLayout}
          name='title'
          label='Title'
          rules={[
            {
              required: true,
              message: "Title can't be empty",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name='range-time-picker'
          label='Period'
          {...rangeConfig}
        >
          <RangePicker showTime format='YYYY-MM-DD HH:mm:ss' />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Button type='primary' htmlType='submit' className='btn-submit'>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormEvents;
