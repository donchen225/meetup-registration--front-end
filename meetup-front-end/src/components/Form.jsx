import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: this.props.currentId,
      firstNameInput: this.props.clickedAttendee.firstName,
      lastNameInput: '',
      emailInput: '',
      shirtSizeInput: '',
      skillLevelInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const attendeeData = {
      id: this.state.currentId,
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      shirt: this.state.shirtSizeInput,
      skillLevel: this.state.skillLevelInput
    }
    if (this.props.clickedAttendee) {
      this.props.updateAttendee(attendeeData);
    } else {
      this.props.addAttendee(attendeeData);
    }
  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label> First Name:
          <input type="text"name="firstNameInput" onChange={this.handleChange}
            value={this.state.firstNameInput || this.props.clickedAttendee.firstName}/>
        </label>
        <br />

        <label> Last Name:
          <input type="text" name="lastNameInput" onChange={this.handleChange}
          value={this.state.lastNameInput || this.props.clickedAttendee.lastName}/>
        </label>
        <br />

        <label> Email:
          <input type="text" name="emailInput" onChange={this.handleChange}
          value={this.state.emailInput || this.props.clickedAttendee.email}/>
        </label>
        <br />

        <label> Shirt Size:
          <select type = "text" name="shirtSizeInput" onChange={this.handleChange}
            value={this.state.shirtSizeInput || this.props.clickedAttendee.shirt}>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </label>
        <br />

        <label> Experience Level:
          <select type="text" name="skillLevelInput" onChange={this.handleChange}
            value={this.state.skillLevelInput || this.props.clickedAttendee.skillLevel}>
            <option>beginner</option>
            <option>intermediate</option>
            <option>expert</option>
          </select>
        </label>

        <button onClick={this.handleSubmit}> REGISTER </button>
      </div>
    )
  }
}

export default Form;