import React from 'react';
import Attendee from './Attendee.jsx';

const AttendeesList = ({attendees}) => {
  let beginnerList = [];
  let intermediateList = [];
  let expertList = [];

  for (var i = 0; i < attendees.length; i++) {
    if (attendees[i].skillLevel === 'beginner') {
        beginnerList.push(attendees[i]);
    } else if (attendees[i].skillLevel === 'intermediate') {
        intermediateList.push(attendees[i]);
    } else if (attendees[i].skillLevel === 'expert') {
        expertList.push(attendees[i]);
    }
  }
  return (
    <div className="attendees">
      <h2>Attendees</h2>

      <h3>Beginner</h3>
      <React.Fragment>
        {beginnerList.map((attendee, i) => <Attendee attendee={attendee} key={i}/>)}
      </React.Fragment>

      <h3> Intermediate </h3>
      <React.Fragment>
        {intermediateList.map((attendee, i) => <Attendee attendee={attendee} key={i}/>)}
      </React.Fragment>

      <h3> Expert </h3>
      <React.Fragment>
        {expertList.map((attendee, i) => <Attendee attendee={attendee} key={i}/>)}
      </React.Fragment>

    </div>
  )
}

export default AttendeesList