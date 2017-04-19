import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  headingText() {
    if (this.props.formType === 'login') {
      return 'Log In to ';
    } else {
      return 'Sign up for ';
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.headingText()}HalalHub
          <br/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
