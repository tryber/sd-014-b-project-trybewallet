import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

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
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  handleClick() {

  }

  render() {
    const { login, password } = this.state;
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
        <Button label="Entrar" onClick={ this.handleClick } />
      </div>
    );
  }
}

export default Login;
