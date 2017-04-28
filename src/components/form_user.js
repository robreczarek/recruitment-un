import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import { createUser } from '../actions/index'
import EmailValidator from 'email-validator';

class FormUser extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount(){
    this.name.focus(); 
  }

  onSubmit(props) {

    this.props.createUser(props)
      .then(() => {
        this.context.router.push({
          pathname: '/',
          query: { 
            success: true,
            error: ''
          }
        });
      });
  }

  render() {
    const { 
      fields: { name, email },
      handleSubmit
    } = this.props;

    return (
      <div className="formAddUser">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <div>
              <input
                type="text"
                placeholder="Name..."
                ref={(input) => { this.name = input; }}
                {...name}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="text"
                placeholder="Email..."
                {...email}
              />
            </div>
          </div>
          <input type="submit" value="Submit" className="buttonSolid" />
            
        </form>
        <div className="formError">
          <div className="clear">{ name.touched ?  name.error : '' }</div>
          <div className="clear">{ email.touched ? email.error : '' }</div>
        </div>
      </div>

    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name';
  } else {
    if (values.name.length > 20) {
      errors.name = 'Name is over 20 letters';
    }
  }

  if (!values.email) {
    errors.email = 'Enter an email address';
  }

  if (EmailValidator.validate(values.email) === false) {
    errors.email = 'Enter a valid email address';
  }

  return errors;
}


export default reduxForm({
  form: 'FormUser',
  fields: ['name', 'email'],
  validate
}, null, { createUser })(withRouter(FormUser));
