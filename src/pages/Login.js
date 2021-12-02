import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';
import logo from '../images/wallet.jpg';
import ButtonComponent from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  isEmailValid(email) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email) === true;
  }

  handleChange( {target} ) {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  }

  handleClick () {
    const { history, saveEmail } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const minLenght = 6;
    const isValidEmail = this.isEmailValid( email );
    return (
      <section className="section-login">
        <img 
          className="logo"
          src={ logo }
          alt="imgage-wallet"
        />
        <input 
          className="input-login"
          type="email"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          value={ email }
          placeholder="E-mail"
        />
        <input
          className="input-login"
          type="password"
          name="password" 
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
          placeholder="Password"
        />
        <span>* Your password must have min. 6 characters</span>
        <ButtonComponent 
          title="Entrar" 
          handleClick={ this.handleClick }
          buttonClass="btn btn-primary btn-lg"
          isDisable={ !(((password.length >= minLenght)) && (isValidEmail )) }
        />
      </section>
    ); 
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
};

export default connect(null, mapDispatchToProps)(Login);
