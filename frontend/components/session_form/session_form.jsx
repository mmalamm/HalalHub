import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.headingText()}HalalHub
          <br/>
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
          <br/>
          <input type="submit" value={this.buttonText()} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
