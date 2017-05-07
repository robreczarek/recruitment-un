import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BtnAddUser from './containers/button_adduser';
import FormAddUser from './containers/form_user';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BtnAddUser} />
    <Route path="adduser" component={FormAddUser} />
    <Route path="success" component={BtnAddUser} />
  </Route>
);