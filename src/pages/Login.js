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
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          name="e-mail"
          placeholder="E-mail"
          onChange={ (event) => this.handleChange(event) }
          value={ email }
        />
        <input
          type="password"
          data-testid="password-input"
          name="senha"
          placeholder="Senha"
          onChange={ (event) => this.handleChange(event) }
          value={ password }
        />
        <input
          type="button"
          name="entrar"
          value="Entrar"
          /* disable={  } */
        />
      </form>
    );
  }
}

export default Login;
