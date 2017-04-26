import React, { Component } from 'react';
import { Link  } from 'react-router';

class ButtonAddUser extends Component {

  userAdded() {

    const success = this.props.location.query.success;
    const error = this.props.location.query.error;

    if (success === 'true') {
      return (
        <div className="notification">
          <i className="fa fa-check success" aria-hidden="true"></i> You have successfully added an user.
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
      <div className="buttonAddUser">
        <div className="left">
          <Link to="adduser"><div>ADD USER</div></Link>
        </div>

        <div className="left">
          {this.userAdded()}
        </div>
      </div>
    );
  }
}

export default ButtonAddUser;