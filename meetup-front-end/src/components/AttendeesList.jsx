import React from 'react';
import Attendee from './Attendee.jsx';

const AttendeesList = ({attendees, handleClickOnAttendee}) => (
    <div className="attendees">
      <h2>Attendees</h2>

      <h3>Beginner</h3>
      {attendees.map((attendee, i) => {
        if (attendee.skillLevel === 'beginner') {
          return <Attendee attendee={attendee}
            handleClickOnAttendee={handleClickOnAttendee} key={i}/>
        }
      })}

      <h3> Intermediate </h3>
      {attendees.map((attendee, i) => {
        if (attendee.skillLevel === 'intermediate') {
          return <Attendee attendee={attendee}
            handleClickOnAttendee={handleClickOnAttendee} key={i}/>
        }
      })}

      <h3> Expert </h3>
      {attendees.map((attendee, i) => {
        if (attendee.skillLevel === 'expert') {
          return <Attendee attendee={attendee}
            handleClickOnAttendee={handleClickOnAttendee} key={i}/>
        }
      })}
    </div>
)

export default AttendeesList