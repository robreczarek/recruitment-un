import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  renderUsers(userData) {
    const id = userData.id;
    const name = userData.name;
    const email = userData.email;

    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>X</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="users">
        <thead>
          <tr>
            <th>LP</th>
            <th>USER</th>
            <th>EMAIL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map(this.renderUsers)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);
