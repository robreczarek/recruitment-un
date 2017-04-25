import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../../style/users.css';

class Users extends Component {

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
          {this.props.users.map(this.renderUsers)}
        </tbody>
      </table>
    );
  }

  renderUsers(userData) {
    const id = userData.id;
    const name = userData.name;
    const email = userData.email;

    return (
      <tr key={id}>
        <td className={styles.dataLP}>
          <div className={styles.roundbg}>{id}</div>
        </td>
        <td className={styles.dataUser}>{name}</td>
        <td className={styles.dataEmail}>{email}</td>
        <td className={styles.dataDelete}>X</td>
      </tr>
    );
  }

}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);
