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
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      shirtSizeInput: '',
      skillLevelInput: '',
      buttonText: 'REGISTER'
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const attendeeData = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      shirt: this.state.shirtSizeInput,
      skillLevel: this.state.skillLevelInput
    }
    if (this.state.buttonText === 'UPDATE') {
      this.updateAttendee(attendeeData);
    }
    else if (this.state.buttonText === 'REGISTER') {
      this.addAttendee(attendeeData);
    }
    this.setState({
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      shirtSizeInput: '',
      skillLevelInput: '',
      buttonText: 'REGISTER'
    })
  }

  fetchData() {
    axios.get('/attendees')
      .then((response) => {
        console.log('data has been successfully retrieved');
        this.setState({
          attendeesList: response.data,
          currentId: response.data[response.data.length-1].id
        })
      })
      .catch((error) => {
        console.log('get request is unsuccessful');
      })
  }

  addAttendee(data) {
    console.log('added data', data);
    axios.post('/attendees', data)
      .then((response) => {
        console.log('data has been successfully added')
        this.fetchData();
      })
      .catch((error) => {
        console.log('post request is unsuccessful')
      })
  }

  updateAttendee(data) {
    axios.patch(`/attendees/${this.state.currentId}`, data)
      .then((response) => {
        console.log('data has been successfully updated');
        this.fetchData();
      })
      .catch((error) => {
        console.log('patch request is unsuccessful')
      })
  }

  handleClickOnAttendee(attendee) {
    this.setState({
      currentId: attendee.id,
      firstNameInput: attendee.firstName,
      lastNameInput: attendee.lastName,
      emailInput: attendee.email,
      shirtSizeInput: attendee.shirt,
      skillLevelInput: attendee.skillLevel,
      buttonText: 'UPDATE'
    })
  }

  render() {
    return (
      <div className="main">
        <Form
          handleChange = {this.handleChange.bind(this)}
          handleSubmit = {this.handleSubmit.bind(this)}
          firstName = {this.state.firstNameInput}
          lastName = {this.state.lastNameInput}
          email = {this.state.emailInput}
          shirt = {this.state.shirtSizeInput}
          skillLevel = {this.state.skillLevelInput}
          buttonText = {this.state.buttonText}
          />
        <AttendeesList
          attendees = {this.state.attendeesList}
          handleClickOnAttendee = {this.handleClickOnAttendee.bind(this)}
        />
      </div>
    )
  }
}

export default App;
