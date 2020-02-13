import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: this.props.currentId,
      firstNameInput: '',
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
    this.props.addAttendee({
      id: this.state.currentId,
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      email: this.state.emailInput,
      shirt: this.state.shirtSizeInput,
      skillLevel: this.state.skillLevelInput
    });
  }

  render() {
    return (
      <div className="attendee-form">
        <h2>Register Attendee</h2>
        <label> First Name:
          <input type="text" name="firstNameInput" onChange={this.handleChange}/>
        </label>
        <br />

        <label> Last Name:
          <input type="text" name="lastNameInput" onChange={this.handleChange}/>
        </label>
        <br />

        <label> Email:
          <input type="text" name="emailInput" onChange={this.handleChange}/>
        </label>
        <br />

        <label> Shirt Size:
          <select type = "text" name="shirtSizeInput" onChange={this.handleChange}>
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
          <select type="text" name="skillLevelInput" onChange={this.handleChange}>
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