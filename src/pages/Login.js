import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEmail } from '../actions';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.isEmailValid = this.isEmailValid.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { email } = this.state;
    const { dispatchEmail } = this.props;
    dispatchEmail(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  isEmailValid(parametro) {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(parametro) === true;
  }
  // referência do regex https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  render() {
    const { email, password } = this.state;
    const minPassword = 6;
    return (
      <div>
        <Input
          id="email-input"
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          placeholder="exemple@email.com"
        />
        <Input
          id="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          placeholder="Digite sua senha"
        />
        <Link to="/carteira">
          <Button
            disabled={ !this.isEmailValid(email) || password.length < minPassword }
            label="Entrar"
            onClick={ this.handleClick }
          />
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(addEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
