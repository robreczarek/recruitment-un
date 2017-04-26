import React, { Component } from 'react';

import Header from './header';
import Users from '../containers/users';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="barForm">
          {this.props.children}
        </div>
        <Users />
      </div>
    );
  }
}
