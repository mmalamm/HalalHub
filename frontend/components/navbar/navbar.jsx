import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="navbar">
    {navbarLeft()}
    <div className="navbar-right">
      <button><Link to="/login" activeClassName="current">Log In</Link></button>
      <button><Link to="/signup" activeClassName="current">Sign Up</Link></button>
    </div>
  </nav>
);


const personalGreeting = (currentUser, logout, router) => {
  const handleLogout = () => {
    logout().then(
      () => router.push('/login')
    )
  };
  return(<hgroup>
    <nav className="navbar">
      {navbarLeft()}
      <div className="navbar-right">
        <h2>
          Welcome to HalalHub, {currentUser.username}!
        </h2>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </nav>
  </hgroup>)
};

const navbarLeft = () => (
  <div className="navbar-left">
    <Link to="/">
      <img src={window.optimisedsvg} />
    </Link>
    <form>
      <input type="search" placeholder="Search"/>
      <button>
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  </div>
)


const Navbar = ({ currentUser, logout, router }) => (
  currentUser ? personalGreeting(currentUser, logout, router) : sessionLinks()
);

export default Navbar;
