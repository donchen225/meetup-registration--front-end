import React from 'react';
import ReactDOM from 'react';

class RegisterAttendeeForm extends React.Component {
  render() {
    return (
      <form>
        <button onClick={this.props.handleSubmit}> Register </button>

        <label> First Name:
          <input type="text" name="firstNameInput" onChange={this.props.handleChange}/>
        </label>
        <br />

        <label> Last Name:
          <input type="text" name="lastNameInput" onChange={this.props.handleChange}/>
        </label>
        <br />

        <label> Email:
          <input type="text" name="emailInput" onChange={this.props.handleChange}/>
        </label>
        <br />

        <label> Shirt Size:
          <select name="shirtSizeInput" value={this.state.value} onChange={this.props.handleChange}>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
        <br />

        <label> Experience Level:
          <select name="experienceInput" value={this.state.value} onChange={this.props.handleChange}>
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="experienced">experienced</option>
          </select>
        </label>
      </form>
    )
  }
}

export default RegisterAttendeeForm;