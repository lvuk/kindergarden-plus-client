import React, { useState } from 'react';
import '../../stylesheets/teacher/dashboard.scss';
import { Button, notification, Result } from 'antd';
import { FaPlus } from 'react-icons/fa';
import multiMonthPlugin from '@fullcalendar/multimonth';
import FullCalendar from '@fullcalendar/react';

const TeacherDashboard = () => {
  const [api, contextHolder] = notification.useNotification();
  const [attendance, setAttendance] = useState({});

  const openNotification = (event, placement) => {
    const formattedStart = formatEventDate(event.start);
    const formattedEnd = formatEventDate(event.end);
    api.info({
      message: `${event.title}`,
      description: `${formattedStart} - ${formattedEnd}`,
      placement,
      pauseOnHover: true,
      showProgress: true,
      duration: 0,
    });
  };

  const formatEventDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Some event',
      start: '2024-10-17',
      end: '2024-10-19',
    },
    {
      id: 2,
      title: 'Meeting',
      start: '2024-10-18T10:30:00', // Use valid ISO format for time-specific events
      end: '2024-10-18T12:30:00',
    },
  ]);

  const handleEventClick = (info) => {
    openNotification(info.event, 'top');
  };

  return (
    <div className='dashboard'>
      {contextHolder}
      <div className='grid-item attendance'>
        <div className='d-flex'>
          <h3>Attendance</h3>
          <p className='lightgray'>Don't forget todays attendance</p>
        </div>

        {attendance ? (
          <Result status='success' title='You have entered attendance' />
        ) : (
          <Button className='btn'>
            <FaPlus />
            Create Attendance
          </Button>
        )}
      </div>
      <div className='grid-item work-log'>
        <div className='d-flex'>
          <h3>Work Log</h3>
          <p className='lightgray'>Don't forget todays attendance</p>
        </div>
        <Button className='btn'>
          <FaPlus />
          Create Work Log
        </Button>
      </div>
      <div className='grid-item quick-note'>
        <h3>Quick Note</h3>
        <Button className='btn'>
          <FaPlus />
          New Quick Note
        </Button>
      </div>
      <div className='grid-item'>
        <h3>Events</h3>
        <FullCalendar
          initialEvents={events}
          eventClick={handleEventClick}
          headerToolbar={null}
          plugins={[multiMonthPlugin]}
          initialView='multiMonthSolo'
          height={'auto'}
          views={{
            multiMonthSolo: {
              type: 'multiMonth',
              duration: { months: 1 },
            },
          }}
        />
      </div>
      <div className='grid-item'>Item 5</div>
      <div className='grid-item'>Item 6</div>
    </div>
  );
};

export default TeacherDashboard;
