import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Users from './containers/users';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Users} />
  </Route>
);