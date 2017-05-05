import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, change, untouch } from 'redux-form';
import { createUser, fetchUsers, pushError } from '../actions/index'
import EmailValidator from 'email-validator';

class FormUser extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchUsers();
  }

  componentDidMount(){
    this.name.focus(); 
  }

  checkUser() {
    return this.props.users.users.find((user) => {
      return user.email === this.props.fields.email.value;
    })
  }

  onSubmit(props) {

    let check = this.checkUser();

    if (check) {
      this.props.pushError('existing user');
    } else {
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
    
  }

  resetForm(form) {
    const fields = ['name','email']
    for (var i = 0; i < fields.length; i++) {
      this.props.dispatch(change(form,fields[i],null))
      this.props.dispatch(untouch(form,fields[i]))
    }
    this.name.focus(); 
  }

  renderError(error) {
    switch (error) {
      case 'existing user':
        return (
          <div className="clear">
            This user already exists in the database
          </div>
        );
    }
  }

  renderReset() {

    return (
        <a href="#" className="reset" onClick={ () => { this.resetForm('FormUser') } }>Reset fields</a>
    );
  }

  render() {
    const { 
      fields: { name, email },
      handleSubmit
    } = this.props;

    const fields = this.props.fields;

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
                ref={(input) => { this.email = input; }}
                {...email}
              />
            </div>
          </div>
          <input type="submit" value="Submit" className="buttonSolid" />
            
        </form>
        <div className="formReset">
          <div className="clear">{ fields.name.value || fields.email.value ? this.renderReset() : '' }</div>
        </div>
        <div className="formError">
          <div className="clear">{ name.touched ?  name.error : '' }</div>
          <div className="clear">{ email.touched ? email.error : '' }</div>
          { this.renderError(this.props.error_message.error_message) }
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

function mapStateToProps(state) {
  return {
    users: state.users,
    error_message: state.error_message
  }
}

FormUser = reduxForm({
  form: 'FormUser',
  fields: ['name', 'email'],
  validate
}, null, { createUser })(FormUser);

FormUser = connect(mapStateToProps, { fetchUsers, pushError })(FormUser);


export default FormUser;
