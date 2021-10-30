import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmailUser } from '../actions';

import Button from '../Components/Button';
import Input from '../Components/Input';

import './login.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.onSubmitCarteira = this.onSubmitCarteira.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isValidate = this.isValidate.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  onSubmitCarteira() {
    const { getInfoEmail, history } = this.props;
    const { email } = this.state;
    getInfoEmail(email);

    history.push('/carteira');
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  isValidate(email) {
    const valid = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return valid.test(email);
  }

  handleDisabled() {
    const { email, password } = this.state;
    const number = 5;
    if (password.length > number && this.isValidate(email) === true) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset className="home">
        <Input
          dataTestid="email-input"
          type="text"
          name="email"
          placeholder="Digite um email válido"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          dataTestid="password-input"
          type="password"
          name="password"
          placeholder="Digite a senha"
          value={ password }
          onChange={ this.handleChange }
        />
        <Button
          text="Entrar"
          onClick={ this.onSubmitCarteira }
          disabled={ this.handleDisabled() }
        />
      </fieldset>
    );
  }
}

Home.propTypes = {
  getInfoEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getInfoEmail: (email) => dispatch(getEmailUser(email)),
});

export default connect(null, mapDispatchToProps)(Home);
