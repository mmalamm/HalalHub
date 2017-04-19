import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

////////////////////////////////////////////////////////
import { logout, login, signup } from './util/session_api_util';

window.signup = signup;
window.login = login;
window.logout = logout;
window.store = configureStore();
///////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
