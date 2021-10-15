import React from 'react';
import { Link } from 'react-router-dom';
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
          />
        </Link>
      </div>
    );
  }
}

export default Login;
