import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class FormUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
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

  handleReset() {
    this.setState({ name: '', email: '' });
  }

  render() {
    return (
      <div id="barAddUser" className="formAddUser">
        <form>
          <input id="name" type="text" placeholder="Name..." className="left" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
          <input id="email" type="text" placeholder="Email..." className="left" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
          <div className="left buttonSolid" onClick={this.handleSubmit}>
            Submit
          </div>
          <div className="left reset" onClick={this.handleReset}>
            Reset fields
          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(FormUser);