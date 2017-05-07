import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormUser from '../components/form_user';
import { createUser, fetchUsers, pushError } from '../actions/index';

function mapStateToProps(state) {
  return {
    users: state.users,
    error_message: state.error_message
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createUser, fetchUsers, pushError }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);
