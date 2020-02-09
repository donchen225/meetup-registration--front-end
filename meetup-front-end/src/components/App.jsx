import React from 'react';
import axios from 'axios';
import AttendeesList from './AttendeesList.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendeesList: [],
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      shirtSizeInput: '',
      skillLevelInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getAttendeesList();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addAttendee({
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      shirt: this.state.shirtSizeInput,
      skillLevel: this.state.skillLevelInput
    });
  }

  addAttendee(data) {
    axios.post('/attendees', data)
      .then(this.getAttendeesList)
      .catch((error) => {
        console.log(error);
      })
  }

  getAttendeesList() {
    axios.get('/attendees')
      .then((response) => {
        console.log(response.data);
        this.setState({
          attendeesList: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="main">
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <AttendeesList attendees={this.state.attendeesList}/>
      </div>
    )
  }

}

export default App;
