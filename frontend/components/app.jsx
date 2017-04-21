import React from 'react';
import { Link } from 'react-router';
import Navbar from './navbar/navbar_container';

const App = ({children}) => (
  <div id="main">
    <header>
      <Link to="/">
        <img src={window.halalhubsvg} />
      </Link>
    </header>
    {children}
  </div>
);

export default App;
