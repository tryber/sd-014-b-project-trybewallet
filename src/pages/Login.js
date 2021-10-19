import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/; // consultei https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const MIN_PASSWORD = 6;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          placeholder="E-mail"
          onChange={ (event) => this.handleChange(event) }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          placeholder="Senha"
          onChange={ (event) => this.handleChange(event) }
          value={ password }
        />
        <input
          type="button"
          name="entrar"
          value="Entrar"
          disabled={ regex.test(email) && password.length >= MIN_PASSWORD ? 0 : true }
        />
      </form>
    );
  }
}

export default Login;
