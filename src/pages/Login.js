import React from 'react';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <Input
          data-testid="email-input"
          name="email"
          onChange={ this.handleChange }
          placeholder="Digite seu email"
          type="email"
          value={ email }
          required
        />
        <Input
          data-testid="password-input"
          name="password"
          onChange={ this.handleChange }
          placeholder="Senha"
          type="password"
          value={ password }
          required
        />
        <Button
          label="Enviar"
          onClick={ this.handleSubmit }
        />
      </form>
    );
  }
}

export default Login;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
