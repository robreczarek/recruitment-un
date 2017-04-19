import React, { Component } from 'react';

class Users extends Component {
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
          <tr>
            <td>1</td>
            <td>Robert Obreczarek</td>
            <td>robert@obreczarek.com</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Users;