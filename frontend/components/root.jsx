import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import NavbarContainer from './navbar/navbar_container';
import TruckFormContainer from './truck_form/truck_form_container';
import TruckListContainer from './trucklist/trucklist_container';
import IndexPage from './pages/index_page';
import TruckShowPageContainer from './pages/truck_show_page_container';


import SearchContainer from './search/search_container';


const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  return(
    <Provider store={ store }>
      <Router history={hashHistory} >
        <Route path="/" component={App}>
          <IndexRoute component={SearchContainer} onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/trucks" component={IndexPage} onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/trucks/:id" component={TruckShowPageContainer} onEnter={_redirectIfNotLoggedIn}>
          </Route>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/addtruck" component={TruckFormContainer} onEnter={_redirectIfNotLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
