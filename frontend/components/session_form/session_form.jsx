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
    let switchFormText;
    let switchFormUrl;
    let switchFormBtn;
    if (this.props.formType === 'login') {
      switchFormText = 'New User';
      switchFormUrl = '/signup';
      switchFormBtn = 'Sign Up';
    } else {
      switchFormText = 'Already Registered?';
      switchFormUrl = '/login';
      switchFormBtn = 'Log In';
    }

    return(
      <nav className='form-nav'>
        <p>{switchFormText}</p>
        <button
          className="switch-btn"
          onClick={
            (e) => {
              e.preventDefault();this.props.router.push(switchFormUrl);
              this.setState({username: '', password: ''});
            }
          }>
          {switchFormBtn}
        </button>
      </nav>
    );
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
    let errors = this.props.errors;
    if (errors.length){
      return(
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
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
            type="text"
            value={this.state.zip_code}
            onChange={this.update("zip_code")}/>
        </label>
      </div>
    );}
  }



  render() {
    return (
      <div className="main">
        <div className="logo-decal">
          <Link to="/">
            <img src={window.halalhubsvg} />
          </Link>
        </div>
        <div className='session-form'>
          <div className="formbox">
          <h3>{this.headingText()}HalalHub</h3>
            <form onSubmit={this.handleSubmit}>
              <div className='form-title'>
                {this.formTitle()}
              </div>
              <div>
                {this.renderErrors()}
              </div>
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
              { this.switchFormsPart() }
            </form>
          </div>
          <div className='img-container'>
            <img className="truckpic" src={window.halal_truck_pic} />
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
