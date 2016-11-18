import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import appReducers from './reducers';

import fetchSampleUser from './actions/sample_user';

import SampleUserListComponent from './containers/sample_user_list';
import SampleUserComponent from './components/sample_user';

require('./stylesheets/main.scss');

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  appReducers,
  composeWithDevTools(
    applyMiddleware(...middlewares)
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
