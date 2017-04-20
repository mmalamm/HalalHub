import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.addNewUserFields = this.addNewUserFields.bind(this);
    this.switchFormsPart = this.switchFormsPart.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.formType !== this.props.formType) {
      this.props.clearErrors();
    }
  }

  headingText() {
    if (this.props.formType === 'login') {
      return 'Log In to ';
    } else {
      return 'Sign up for ';
    }
  }

  buttonText() {
    if (this.props.formType === 'login') {
      return 'Log In';
    } else {
      return 'Sign Up';
    }
  }

  formTitle() {
    if (this.props.formType === 'login') {
      return 'Sign In';
    } else {
      return 'New User';
    }
  }

  switchFormsPart() {
    if (this.props.formType === 'login') {
      return(
        <div>
          <p>New User</p>
          <button
            onClick={ () => this.props.router.push('/signup') }>
            Sign Up
          </button>
        </div>
      );
    } else {
      return(
        <div>
          <p>Already Registered?</p>
          <button
            onClick={ () => this.props.router.push('/login') }>
            Log In
          </button>
        </div>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user).then(() => this.props.router.push('/'));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  addNewUserFields() {
    if (this.props.formType === "signup") {
    return(
      <div>
        <label> Email:
          <br/>
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}/>
        </label>
        <br/>
        <label> Zip Code:
          <br/>
          <input
            type="password"
            value={this.state.zip_code}
            onChange={this.update("zip_code")}/>
        </label>
      </div>
    );}
  }



  render() {
    return (
      <div>
        <h3>{this.headingText()}HalalHub</h3>
        <form onSubmit={this.handleSubmit}>
          {this.formTitle()}
          {this.renderErrors()}
          <label> User Name:
            <br/>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}/>
          </label>
          <br/>
          <label> Password:
            <br/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}/>
          </label>
          {
            this.addNewUserFields()
          }
          <br/>
          <input type="submit" value={this.buttonText()} />
        </form>
        <p>-------------------------</p>
        {
          this.switchFormsPart()
        }
        <img src={window.halal_truck_pic} />
      </div>
    );
  }
}

export default SessionForm;
