import React from 'react';
import { Link } from 'react-router';

import TruckMap from '../truck_map/truck_map';


const handleSearchSubmit = (e) => {
  e.preventDefault();
  let addressString = e.currentTarget.firstChild.value;
  let mapCtrParams = {
    center: { lat: 40.7309907, lng: -73.8672127 },
    zoom: 21
  }
  debugger
  $.ajax(
    { method: 'get',
      url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBLGSUQ5XA6Ao6JhjrlAUG8K0EyL3UZIkI',
      data: {
        address: addressString
      }
    }
  ).then( result => {
    mapCtrParams.center.lat = result.results[0].geometry.location.lat;
    mapCtrParams.center.lng = result.results[0].geometry.location.lng;
    debugger
    return(
      <TruckMap mapOptions={mapCtrParams} />
    )
  })
}


const navbarLeft = () => (
  <div className="navbar-left">
    <Link to="/">
      <img src={window.optimisedsvg} />
    </Link>
    <form onSubmit={handleSearchSubmit}>
      <input type="search" placeholder="Search"/>
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


const personalGreeting = (currentUser, logout, router) => {
  const handleLogout = () => {
    logout();
    router.push('/login');
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



const Navbar = ({ currentUser, logout, router }) => (
  currentUser ? personalGreeting(currentUser, logout, router) : sessionLinks()
);

export default Navbar;
