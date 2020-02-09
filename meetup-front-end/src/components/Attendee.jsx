import React from 'react';

const Attendee = ({attendee}) => {
  return (
    <div>
      <div> {attendee.firstname} </div>
      <div> {attendee.lastname} </div>
    </div>
  )
}

export default Attendee;