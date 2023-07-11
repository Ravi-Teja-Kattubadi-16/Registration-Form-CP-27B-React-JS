// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameRequiredClassName: 'not-required',
    secondNameRequiredClassName: 'not-required',
    onSubmitResponse: false,
  }

  onChangeSecondName = event => {
    if (event.target.value === '') {
      this.setState({
        secondNameRequiredClassName: 'required',
        lastName: event.target.value,
      })
    } else {
      this.setState({lastName: event.target.value})
    }
  }

  onChangeFirstName = event => {
    if (event.target.value === '') {
      this.setState({
        firstNameRequiredClassName: 'required',
        firstName: event.target.value,
      })
    } else {
      this.setState({firstName: event.target.value})
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      onSubmitResponse: false,
      firstNameRequiredClassName: 'not-required',
      secondNameRequiredClassName: 'not-required',
      firstName: '',
      lastName: '',
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName === '') {
      this.setState({
        secondNameRequiredClassName: 'required',
        onSubmitResponse: false,
      })
    } else if (firstName === '' && lastName !== '') {
      this.setState({
        firstNameRequiredClassName: 'required',
        onSubmitResponse: false,
      })
    } else if (firstName === '' && lastName === '') {
      this.setState({
        firstNameRequiredClassName: 'required',
        secondNameRequiredClassName: 'required',
        onSubmitResponse: false,
      })
    } else if (firstName !== '' && lastName !== '') {
      this.setState({
        firstNameRequiredClassName: 'not-required',
        secondNameRequiredClassName: 'not-required',
        onSubmitResponse: true,
      })
    }
  }

  onBlurSecondName = event => {
    if (event.target.value === '') {
      this.setState({secondNameRequiredClassName: 'required'})
    } else if (event.target.value !== '') {
      this.setState({
        secondNameRequiredClassName: 'not-required',
        lastName: event.target.value,
      })
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameRequiredClassName: 'required'})
    } else if (event.target.value !== '') {
      this.setState({
        firstNameRequiredClassName: 'not-required',
        firstName: event.target.value,
      })
    }
  }

  lastNameInputField = () => {
    const {secondNameRequiredClassName} = this.state
    let borderSecondNameClassName
    if (secondNameRequiredClassName === 'required') {
      borderSecondNameClassName = 'required-input-text-border'
    } else {
      borderSecondNameClassName = 'not-required-input-text-border'
    }

    return (
      <div className="label-input-container">
        <label className="label-heading" htmlFor="last-name">
          LAST NAME
        </label>
        <input
          type="text"
          className={`input-text ${borderSecondNameClassName}`}
          id="last-name"
          placeholder="Last name"
          onBlur={this.onBlurSecondName}
          onChange={this.onChangeSecondName}
        />
        <p className={`${secondNameRequiredClassName}`}>Required</p>
      </div>
    )
  }

  firstNameInputField = () => {
    const {firstNameRequiredClassName} = this.state
    let borderFirstNameClassName
    if (firstNameRequiredClassName === 'required') {
      borderFirstNameClassName = 'required-input-text-border'
    } else {
      borderFirstNameClassName = 'not-required-input-text-border'
    }
    return (
      <div className="label-input-container">
        <label className="label-heading" htmlFor="first-name">
          FIRST NAME
        </label>
        <input
          type="text"
          className={`input-text ${borderFirstNameClassName}`}
          id="first-name"
          placeholder="First name"
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstName}
        />
        <p className={`${firstNameRequiredClassName}`}>Required</p>
      </div>
    )
  }

  render() {
    const {onSubmitResponse} = this.state
    let Result
    if (onSubmitResponse === true) {
      Result = (
        <div className="success-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
            className="success-image"
          />
          <p className="submit-text"> Submitted Successfully </p>
          <button
            type="submit"
            className="successful-submit-button"
            onClick={this.onSubmitAnotherResponse}
          >
            Submit Another Response
          </button>
        </div>
      )
    } else {
      Result = (
        <form className="form-container" onSubmit={this.onSubmitForm}>
          {this.firstNameInputField()}
          {this.lastNameInputField()}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )
    }
    return (
      <div className="app-container">
        <h1 className="registration-heading"> Registration </h1>
        {Result}
      </div>
    )
  }
}

export default RegistrationForm
