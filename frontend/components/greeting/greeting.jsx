import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Log In!</Link>
    <br />
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);


const personalGreeting = (currentUser, logout, router) => {
  const handleLogout = () => {
    logout().then(
      () => router.push('/login')
    )
  };
  return(<hgroup>
    <h2>Welcome to HalalHub, {currentUser.username}!</h2>
    <button onClick={handleLogout}>Log Out</button>
  </hgroup>)
};

const Greeting = ({ currentUser, logout, router }) => (
  currentUser ? personalGreeting(currentUser, logout, router) : sessionLinks()
);

export default Greeting;
