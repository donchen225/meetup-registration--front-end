import React from 'react';
import axios from 'axios';
import AttendeesList from './AttendeesList.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendeesList: [],
      currentId: 0,
      /*clickedAttendee*/
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/attendees')
      .then((response) => {
        console.log(response.data);
        this.setState({
          attendeesList: response.data,
          currentId: response.data[response.data.length-1].id
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  addAttendee(data) {
    axios.post('/attendees', data)
      .then((response) => {
        this.fetchData()
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // handleClickOnAttendee(event) {
  //   axios.get('/attendees', {
  //       params: {
  //         id: event.target.key
  //       }
  //     })
  //     .then((response) => {
  //       this.setState({
  //         clickedAttendee: response.data
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  render() {
    return (
      <div className="main">
        <Form addAttendee = {this.addAttendee.bind(this)} currentId={this.state.currentId}/>
        <AttendeesList attendees={this.state.attendeesList}/>
      </div>
    )
  }
}

export default App;
