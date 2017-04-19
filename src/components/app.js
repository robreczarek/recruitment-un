import React, { Component } from 'react';

import Header from './header';
import Users from '../containers/users';
import BarForm from './bar_form';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BarForm />
        <Users />
      </div>
    );
  }
}
