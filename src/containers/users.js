import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Users from '../components/users';
import { deleteUser, fetchUsers } from '../actions/index';

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteUser, fetchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);