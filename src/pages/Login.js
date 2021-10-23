import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      // email: '',
      // password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            id="email-input"
            data-testid="email-input"
            type="email"
            placeholder="Digite seu email"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            id="passord-input"
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={ this.handleChange }
          />
        </form>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
