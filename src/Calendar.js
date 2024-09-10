import React from 'react';
import FullCalendar from '@fullcalendar/react'; // import FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // DayGrid plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // TimeGrid plugin
import interactionPlugin from '@fullcalendar/interaction'; // interaction plugin
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'; // Scheduler TimeGrid plugin
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'; // Scheduler Timeline plugin

const Calendar = () => {
  return (
    <FullCalendar
      schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives" // Add your FullCalendar Scheduler license key here
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, resourceTimeGridPlugin, resourceTimelinePlugin]}
      initialView="resourceTimeGridDay" // Use a scheduler view as the initial view
      editable={true}
      selectable={true}
      resources={[
        { id: 'a', title: 'Room A' },
        { id: 'b', title: 'Room B' },
        { id: 'c', title: 'Room C' },
        { id: 'd', title: 'Room D' }
      ]}
      events={[
        { resourceId: 'a', title: 'Event 1', start: '2024-10-29T10:00:00', end: '2024-10-29T12:00:00' },
        { resourceId: 'b', title: 'Event 2', start: '2024-10-29T13:00:00', end: '2024-10-29T15:00:00' },
      ]}
    />
  );
};

export default Calendar;
