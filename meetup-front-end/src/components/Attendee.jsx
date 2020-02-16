import React from 'react';

const Attendee = ({attendee, handleClickOnAttendee}) => (
  <div onClick={() => {handleClickOnAttendee(attendee)}}>
    {attendee.firstName} {attendee.lastName}
  </div>
)

export default Attendee;