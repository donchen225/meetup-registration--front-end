import React from 'react';
import AttendeesList from './AttendeesList.jsx';
import RegisterAttendeeForm from './RegisterAttendeeForm.jsx';

// const dummyData = [
//   beginner: [{firstName: 'Don', lastName: 'Chen', email: "dochen225@", shirtSize: 'M', experienceLevel: 'beginner'}],
//   intermediate: [{firstName: 'dsajdhkd', lastName: 'etiek', email: 'shhfvgdk@', shirtSize: 'L', experienceLevel: 'intermediate'}],
//   expert: [{firstName: '265e73', lastName: '3682992', email: '253526@', shirtSize: 'S', experienceLevel: 'expert'}]
// ]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAttendeesList: [
        beginner: [],
        intermediate: [],
        expert: []
      ],
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      shirtSizeInput: '',
      experienceInput: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getAttendeesList = this.getAttendeesList.bind(this);
    // this.updateAttendeesList = this.updateAttendeesList.bind(this);
  }

  handleInput(event) {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    // event.preventdefault();
    const attendeeObject = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      shirtSize: this.state.shirtSizeInput,
      experienceLevel: this.state.experienceInput
    }
    const experienceLevel = attendeeObject.experienceLevel;
    this.setState(prevState => {
      currentAttendeesList: prevState.currentAttendeesList[experienceLevel].push(attendeeObject)
    })
  }

  // getAttendeesList() {

  // }

  // updateAttendeesList()  {

  // }

  render() {
    return (
      <div>
        <AttendeesList name="beginner" attendees={this.state.currentAttendeesList.beginner}/>
        <AttendeesList name="intermediate" attendees={this.state.currentAttendeesList.intermediate}/>
        <AttendeesList name="expert" attendees={this.state.currentAttendeesList.expert}/>
        <RegisterAttendeeForm handleInput={this.handleInput} handleSubmit={this.handleSubmit} getAttendeesList={this.getAttendeesList}/>
      </div>
    )
  }

}

export default App;
