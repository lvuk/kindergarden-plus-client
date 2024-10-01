/* eslint-disable no-undef */
import '../stylesheets/parent/events.scss';
import React, { useEffect, useState, useRef } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGrid from '@fullcalendar/daygrid';
import timeGrid from '@fullcalendar/timegrid';
import { useLayoutContext } from './context/LayoutContext';
import { useUserContext } from './context/UserContext';
import { Space, Table } from 'antd';
import { FaEdit } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

// const localizer = momentLocalizer(moment);

const Events = () => {
  const { isExpanded, isMobile } = useLayoutContext();
  const { user } = useUserContext();
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
          <button className='btn'>
            <FaEdit />
          </button>
          <button className='btn btn-delete'>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </Space>
      ),
    },
  ];

  const calendarRef = useRef(null);

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
