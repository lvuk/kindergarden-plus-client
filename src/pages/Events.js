/* eslint-disable no-undef */
import '../stylesheets/parent/events.scss';
import React, { useEffect, useState, useRef } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGrid from '@fullcalendar/daygrid';
import timeGrid from '@fullcalendar/timegrid';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useLayoutContext } from './context/LayoutContext';
import { useUserContext } from './context/UserContext';
import { Button, Input, Modal, Space, Table, DatePicker, Form } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const { confirm } = Modal;
const { RangePicker } = DatePicker;

// const localizer = momentLocalizer(moment);

const Events = () => {
  const { isExpanded, isMobile } = useLayoutContext();
  const { user } = useUserContext();
  const [record, setRecord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Some event with realllyyy longg ggtittlltleee',
      start: '2024-09-17',
      end: '2024-09-19',
    },
  ]);

  const columns = [
    {
      title: 'Event',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Start',
      dataIndex: 'start',
      key: 'start',
    },
    {
      title: 'End',
      dataIndex: 'end',
      key: 'end',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button className='btn' onClick={() => handleEditButton(record)}>
            <FaEdit />
          </Button>
          <Button className='btn btn-delete' onClick={showDeleteConfirm}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </Space>
      ),
    },
  ];

  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Enter the date range',
      },
    ],
  };

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

  const handleSave = () => {
    console.log('Save');
    setIsModalOpen(false);
  };

  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeTimeValue = fieldsValue['range-time-picker'];
    const values = {
      ...fieldsValue,
      'range-time-picker': [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
    };
    console.log('Received values of form: ', values);
    handleSave();
  };

  const calendarRef = useRef(null);

  const handleEditButton = (record) => {
    setRecord(record);
    setIsModalOpen(true);
    console.log(record);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        //LOGIC FOR DELETEING AN EVENT
        console.log('Delete');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().updateSize();
      console.log(isExpanded);
    }
  }, [isExpanded]);

  return (
    <div className='events'>
      {user?.role === 'teacher' && (
        <div className='my-events'>
          <Table columns={columns} dataSource={events} />
        </div>
      )}
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
      <FullCalendar
        ref={calendarRef}
        plugins={[timeGrid, dayGrid]}
        initialView='dayGridMonth'
        fixedWeekCount={false}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}
        // overflow='auto'
        titleFormat={{
          month: 'long',
          year: 'numeric',
        }}
        views={{
          dayGridMonth: {
            dayHeaderFormat: {
              weekday: isMobile ? 'short' : isExpanded ? 'short' : 'long',
            },
          },
          timeGridWeek: {
            dayHeaderFormat: { weekday: 'short', day: 'numeric' },
          },
        }}
        height={isMobile ? 'auto' : '90vh'}
        firstDay={1}
        nowIndicator={true}
        now={moment().format()}
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'lowercase',
          hour12: false,
        }}
        slotMinTime={'06:00:00'}
        events={events}
        eventClick={(info) => {
          alert('Event: ' + info.event.title);
        }}
      />
    </div>
  );
};

export default Events;
