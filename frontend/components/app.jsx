import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div id="main">
    <header>
      <Link to="/">
        <img src={window.halalhubLogo} />
      </Link>
    </header>
    {children}
  </div>
);

export default App;
