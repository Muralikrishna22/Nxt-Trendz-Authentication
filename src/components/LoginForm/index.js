import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userData = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameInput = () => {
    const {username} = this.state

    return (
      <>
        <label className="label" htmlFor="user-input">
          USERNAME
        </label>
        <input
          type="text"
          className="input"
          id="user-input"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state
    return (
      <>
        <label className="label" htmlFor="user-password">
          PASSWORD
        </label>
        <input
          type="password"
          className="input"
          id="user-password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    return (
      <form className="login-form" onSubmit={this.onSubmitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-web-img"
        />
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="input-container">{this.renderUsernameInput()}</div>
          <div className="input-container">{this.renderPasswordInput()}</div>
          <button type="submit" className="submit-btn">
            Login
          </button>
          {showError && <p className="error">*{errorMsg}</p>}
        </div>
      </form>
    )
  }
}

export default LoginForm
