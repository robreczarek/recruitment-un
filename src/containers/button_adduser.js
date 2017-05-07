import React from 'react';
import { connect } from 'react-redux';

import ButtonAddUser from '../components/button_adduser';

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(ButtonAddUser);
