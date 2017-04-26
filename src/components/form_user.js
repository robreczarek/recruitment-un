import React, { Component } from 'react';
import { withRouter } from 'react-router';

class FormUser extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, formData) {
    e.preventDefault();
    this.props.router.push({
      pathname: '/',
      query: { 
        success: true,
        error: ''
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <input type="text" />
          <button type="submit">Submit</button>
          Reset fields
        </form>
      </div>

    );
  }
}

export default withRouter(FormUser);