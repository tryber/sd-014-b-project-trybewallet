import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../components/Input';
import Button from '../components/Button';

import { loginSuccessful } from '../actions';

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
    const { email } = this.state;
    const { history, login } = this.props;
    login({ email });
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <Input
          id="email-input"
          name="email"
          onChange={ this.handleChange }
          placeholder="Digite seu email"
          type="email"
          value={ email }
          required
        />
        <Input
          id="password-input"
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

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginSuccessful(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};
