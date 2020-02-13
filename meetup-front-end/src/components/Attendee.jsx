import React from 'react';

const Attendee = ({attendee}) => (
  <div /*onClick={handleClickOnAttendee}*/>
    {attendee.firstName} {attendee.lastName}
  </div>
)

export default Attendee;