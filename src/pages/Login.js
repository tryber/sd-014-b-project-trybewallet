import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveEmail } from '../actions/index';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabledState: true,
      emailInput: '',
      passwordInput: '',
    }
  }

  verifyLoginConditions = () => {
    const {emailInput, passwordInput} = this.state;
    const minPasswordLength = 6;
    const passwordBool = passwordInput.length >= minPasswordLength;
    const emailBool = emailInput.includes('@') && emailInput.endsWith('.com');
    const passwordVerification = () => (
      passwordBool ? true : false
    );
    const emailVerification = () => (
      emailBool ? true: false
    );
    if (passwordVerification() && emailVerification()){
      this.setState({disabledState: false})
    }
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value,
    }, () => this.verifyLoginConditions());
  };

  render() {
    const { disabledState, emailInput } = this.state;
    const { saveEmail } = this.props;
    return (
      <form className="login-form">
        <label htmlFor="email-input" className="email-label">
          E-mail:
          <input
            data-testid="email-input"
            name="emailInput"
            placeholder="Digite seu e-mail"
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="password-input" className="password-label">
          Senha:
          <input
            data-testid="password-input"
            name="passwordInput"
            type="password"
            placeholder="Digite sua senha"
            onChange={this.handleChange}
          />
          <Link to="/carteira">
            <button
              type="button"
              className='login-button'
              disabled={ disabledState }
              onClick={() => saveEmail(emailInput)}
            >
              Entrar
            </button>
          </Link>
        </label>
      </form>
    );
  }
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (state) => dispatch(saveEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
