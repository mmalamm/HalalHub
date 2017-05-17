import React from 'react';
import { withRouter, Link } from 'react-router';

import TruckMap from '../truck_map/truck_map';

const navbarLeft = (handleSearchSubmit) => (
  <div className="navbar-left">
    <Link to="/">
      <img src={window.optimisedsvg} />
    </Link>
    <form onSubmit={handleSearchSubmit}>
      <input type="search" placeholder="Search by Location!"/>
      <button>
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  </div>
)

const sessionLinks = () => (
  <nav className="navbar">
    {navbarLeft()}
    <div className="navbar-right">
      <button><Link to="/login" activeClassName="current">Log In</Link></button>
      <button><Link to="/signup" activeClassName="current">Sign Up</Link></button>
    </div>
  </nav>
);


const personalGreeting = (currentUser, logout, handleSearchSubmit) => {
  const handleLogout = () => {
    logout();
    window.location.reload();
  };
  return(<hgroup>
    <nav className="navbar">
      {navbarLeft(handleSearchSubmit)}
      <div className="navbar-right">
        <h2>
          Welcome to HalalHub, {currentUser.username}!
        </h2>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </nav>
  </hgroup>)
};



const Navbar = ({ currentUser, logout, handleSearchSubmit }) => {
  return (
  currentUser ? personalGreeting(currentUser, logout, handleSearchSubmit) : sessionLinks()
);
}

export default withRouter(Navbar);
