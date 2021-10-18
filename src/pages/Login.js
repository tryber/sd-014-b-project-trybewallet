import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../components/input';
import Button from '../components/button';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmitForm() {

  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <Input
          data-testid="email-input"
          label="Email:"
          type="text"
          onChange={ this.handleChange }
          value={ email }
          required
        />

        <Input
          data-testid="password-input"
          label="Email:"
          type="text"
          onChange={ this.handleChange }
          value={ password }
          required
        />

        <Button type="button" label="Entrar" onClick={ this.onSubmitForm } />
      </fieldset>
    );
  }
}

export default Login;
