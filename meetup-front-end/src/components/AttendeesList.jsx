import React from 'react';
import Attendee from './Attendee.jsx';

const AttendeesList = ({attendees}) => {
  return (
    <div>
      {attendees.map( (attendee, i) => (
        <Attendee attendee={attendee} key={i}/>
      ))}
    </div>
  )
}

export default AttendeesList