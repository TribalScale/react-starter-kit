import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import appReducers from './reducers';

import { fetchSampleUser } from './actions/sample_user';

import SampleUserListComponent from './containers/sample_user_list';
import SampleUserComponent from './components/sample_user';

require('./sass/main.scss');

const store = createStore(
  appReducers,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(fetchSampleUser());

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="/users" />
        <Route path="users" component={SampleUserListComponent} />
        <Route path="user/:id" component={SampleUserComponent} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
