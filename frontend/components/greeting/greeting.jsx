import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Log In!</Link>
    <br />
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup>
    <h2>Welcome to HalalHub, {currentUser.username}!</h2>
    <button onClick={logout}>Log Out</button>
  </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
