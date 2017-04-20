import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <header>
      <Link to="/">
        <img src={window.halalhubLogo} />
      </Link>
      {children}
    </header>
  </div>
);

export default App;
