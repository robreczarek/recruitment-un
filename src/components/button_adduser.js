import React, { Component } from 'react';
import { Link } from 'react-router';

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
        {this.renderButtonAddUser(this.props.users.users.length)}

        <div className="barNotifications">
          {this.userAdded()}
          {this.renderTooManyUsers(this.props.users.users.length)}
        </div>
      </div>
    );
  }

  renderButtonAddUser(numUsers) {
    if (numUsers < this.maxUsers) {
      return (
        <div className="left buttonOutline">
          <Link to="adduser"><i className="fa fa-plus-circle" aria-hidden="true"></i> Add User</Link>
        </div>
      )
    }
  }

  renderTooManyUsers(numUsers) {
    if (numUsers >= this.maxUsers) {
      return (
        <div className="notification">
          <i className="fa fa-exclamation-circle warning" aria-hidden="true"></i> You have reached the maximum number of users.
        </div>
      )
    }
  }

}

export default ButtonAddUser;
