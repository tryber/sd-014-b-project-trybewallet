import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

  class Login extends React.Component {
    constructor() {
      super();

      this.state = {
        email: '',
        password: '',
      }
    }

  isEmailValid = (email) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  };

  handleChange = ( {target} ) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  };

  handleClick = () => {
    const { history, saveEmail } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira')
  };

  render() {
    const { email, password } = this.state;
    const { saveEmail } = this.props;
    const minLenght = 6;
    const isValidEmail = this.isEmailValid( email );
    return (
      <section>
        <label htmlFor="email">
          E-mail:
          <input 
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password" 
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button 
          type="button"
          disabled={ !(((password.length >= minLenght)) && (isValidEmail )) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    ) 
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (value) => dispatch(saveEmail(value)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default connect(null, mapDispatchToProps)(Login);
