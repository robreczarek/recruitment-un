import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router';
import { fetchUsers } from '../actions/index';

class ButtonAddUser extends Component {

  constructor(props) {
    super(props);

    this.maxUsers = 10
  }

  userAdded() {

    const success = this.props.location.query.success;
    const error = this.props.location.query.error;

    if (success === 'true') {
      return (
        <div className="notification">
          <i className="fa fa-check success" aria-hidden="true"></i> You have successfully added a user.
        </div>
      );
    } else if (success === 'false' && error) {
      return (
        <div className="notification">
          <i className="fa fa-exclamation-circle warning" aria-hidden="true"></i> {error}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {

    return (
      <div className="barAddUser">
        {this.renderButtonAddUser()}

        <div className="barNotifications">
          {this.userAdded()}
          {this.renderTooManyUsers()}
        </div>
      </div>
    );
  }

  renderButtonAddUser() {
    if (this.props.users.users.length < this.maxUsers) {
      return (
        <div className="left buttonOutline">
          <Link to="adduser"><i className="fa fa-plus-circle" aria-hidden="true"></i> Add User</Link>
        </div>
      )
    }
  }

  renderTooManyUsers() {
    if (this.props.users.users.length >= this.maxUsers) {
      return (
        <div className="notification">
          <i className="fa fa-exclamation-circle warning" aria-hidden="true"></i> You have reached the maximum number of users.
        </div>
      )
    }
  }

}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(ButtonAddUser);
