/* eslint-disable no-undef */
import '../../stylesheets/parent/events.scss';
import React, { useEffect, useState, useRef } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGrid from '@fullcalendar/daygrid';
import timeGrid from '@fullcalendar/timegrid';
import { useLayoutContext } from '../context/LayoutContext';

// const localizer = momentLocalizer(moment);

const Events = () => {
  const { isExpanded, isMobile } = useLayoutContext();
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Some event with realllyyy longg ggtittlltleee',
      start: '2024-09-17',
      end: '2024-09-19',
    },
  ]);

  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().updateSize();
      console.log(isExpanded);
    }
  }, [isExpanded]);

  return (
    <div className='events'>
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
