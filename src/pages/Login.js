import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { saveUserData } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, saveLoginAndPassword } = this.props;
    const { login, password } = this.state;
    saveLoginAndPassword(login, password);
    history.push('/carteira');
  }

  render() {
    const { login, password } = this.state;
    const isValidEmail = login.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const minLength = 6;
    return (
      <div>
        <Input
          dataTestId="email-input"
          type="email"
          value={ login }
          id="login"
          name="login"
          onChange={ this.handleChange }
        />
        <Input
          dataTestId="password-input"
          type="password"
          value={ password }
          id="password"
          name="password"
          onChange={ this.handleChange }
        />
        <Button
          label="Entrar"
          onClick={ this.handleClick }
          disabled={ password.length < minLength || !isValidEmail }
        />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  saveLoginAndPassword: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    saveLoginAndPassword: (login, password) => dispatch(saveUserData(login, password)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
