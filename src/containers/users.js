import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, fetchUsers } from '../actions/index';

import styles from '../../style/users.css';

class Users extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  handleDelete(userID) {
    this.props.deleteUser(userID);
  }

  render() {

    const users = this.props.users.users;

    return (
      <table className={styles.users}>
        <thead>
          <tr>
            <th className={styles.headerLP}>LP</th>
            <th className={styles.userStyle}>USER</th>
            <th className={styles.emailStyle}>EMAIL</th>
            <th className={styles.deleteStyle}></th>
          </tr>
        </thead>
        <tbody>
          {this.renderUsers(users)}
        </tbody>
      </table>
    );
  }

  renderUsers(users) {
    if (users.length) {
      return users.map((user) => {
        return this.renderUser(user);
      });
    } else {
      return (
        <tr>
          <td colSpan="4">No users yet</td>
        </tr>
      );
    }
  }

  renderUser(user) {

    const id = user.id;
    const name = user.name;
    const email = user.email;

    return (
      <tr key={id}>
        <td className={styles.dataLP}>
          <div className={'circle ' + styles.lpBG}>{id}</div>
        </td>
        <td className={styles.dataUser}>{name}</td>
        <td className={styles.dataEmail}>{email}</td>
        <td className={styles.dataDelete}><div onClick={ () => {this.handleDelete(id)} }>X</div></td>
      </tr>
    );
  }

}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}


export default connect(mapStateToProps, { deleteUser, fetchUsers })(Users);
