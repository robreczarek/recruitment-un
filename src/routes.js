import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BtnAddUser from './components/button_adduser';
import FormAddUser from './components/form_user';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BtnAddUser} />
    <Route path="adduser" component={FormAddUser} />

  </Route>
);