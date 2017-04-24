import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

////////////////////////////////////////////////////////
import { logout, login, signup } from './util/session_api_util';
import { fetchTrucks, fetchTruck } from './util/trucks_api_util';

///// session api tests
window.signup = signup;
window.login = login;
window.logout = logout;

///// truck api tests
window.getTrucks = fetchTrucks;
window.getTruck = fetchTruck;
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
