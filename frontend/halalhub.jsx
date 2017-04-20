import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

////////////////////////////////////////////////////////
import { logout, login, signup } from './util/session_api_util';

window.signup = signup;
window.login = login;
window.logout = logout;
///////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    ///////////////////////////////////
    window.store = store;
    //////////////////////////////////
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
