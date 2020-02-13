import React from 'react';
import Attendee from './Attendee.jsx';

const AttendeesList = ({attendees}) => (
    <div className="attendees">
      <h2>Attendees</h2>

      <h3>Beginner</h3>
      <React.Fragment>
        {attendees.map((attendee, i) => {
          if (attendee.skillLevel === 'beginner') {
            return <Attendee attendee={attendee} key={i}/>
          }
        })}
      </React.Fragment>

      <h3> Intermediate </h3>
      <React.Fragment>
        {attendees.map((attendee, i) => {
          if (attendee.skillLevel === 'intermediate') {
            return <Attendee attendee={attendee} key={i}/>
          }
        })}
      </React.Fragment>

      <h3> Expert </h3>
      <React.Fragment>
        {attendees.map((attendee, i) => {
          if (attendee.skillLevel === 'expert') {
            return <Attendee attendee={attendee} key={i}/>
          }
        })}
      </React.Fragment>
    </div>
)

export default AttendeesList