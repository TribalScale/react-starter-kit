import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import SampleUserListComponent from './components/sample_user_list';
import SampleUserComponent from './components/sample_user';

require('./sass/main.scss');


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRedirect to="/users" />
      <Route path="users" component={SampleUserListComponent} />
      <Route path="user/:id" component={SampleUserComponent} />
    </Route>
  </Router>
), document.getElementById('app'));
