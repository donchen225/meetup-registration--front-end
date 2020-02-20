import React from 'react';

const Form = ({ handleChange, handleSubmit, firstName, lastName, email, shirt, skillLevel, buttonText }) => {
  return (
        <div className="attendee-form">
          <h2>Register Attendee</h2>

          <label> First Name:
            <input type="text" name="firstNameInput" onChange={handleChange} value={firstName}/>
          </label>
          <br />

          <label> Last Name:
            <input type="text" name="lastNameInput" onChange={handleChange} value={lastName}/>
          </label>
          <br />

          <label> Email:
            <input type="text" name="emailInput" onChange={handleChange} value={email}/>
          </label>
          <br />

          <label> Shirt Size:
            <select type = "text" name="shirtSizeInput" onChange={handleChange} value={shirt}>
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
            <select type="text" name="skillLevelInput" onChange={handleChange} value={skillLevel}>
              <option>beginner</option>
              <option>intermediate</option>
              <option>expert</option>
            </select>
          </label>

          <button onClick={handleSubmit}> {buttonText} </button>

        </div>
  )
}


export default Form;