import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import styles from '../../style/users.css';

class Users extends Component {

  constructor(props) {
     super(props);
     
     this.handleDelete = this.handleDelete.bind(this);
  } 

  componentWillMount() {
    this.props.fetchUsers();
  }

  handleDelete(userID, e) {
    e.preventDefault();
    this.props.deleteUser(userID)
      .then(() => {
        browserHistory.push('/')
      });
  }

  render() {
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
          {this.renderUsers(this.props.users.users.sort(compare))}
        </tbody>
      </table>
    );
  }

  renderUsers(users) {
    if (users.length) {
      return users.map((user, index) => {
        return this.renderUser(user, index+1);
      });
    } else {
      return (
        <tr>
          <td colSpan="4" className={styles.dataLP}>No users yet</td>
        </tr>
      );
    }
  }

  renderUser(user, index) {

    const id = user.id;
    const name = user.name;
    const email = user.email;

    return (
      <tr key={id}>
        <td className={styles.dataLP}>
          <div className={'circle ' + styles.lpBG}>{index}</div>
        </td>
        <td className={styles.dataUser}>{name}</td>
        <td className={styles.dataEmail}>{email}</td>
        <td className={styles.dataDelete}><div onClick={ (e) => {this.handleDelete(id, e)} }>X</div></td>
      </tr>
    );
  }

}

function compare(a,b) {
  if (a.id < b.id) {
    return 1;
  }
  if (a.id > b.id) {
    return -1;
  }
  return 0;
}

export default Users;
