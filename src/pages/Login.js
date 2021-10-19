import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // função indicada pelo Michael Caxias no slack
  emailValidation(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(email)) return true;
    return false;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha } = this.state;
    const minChar = 6;
    const validation = senha.length >= minChar && this.emailValidation(email);
    return (
      <form>
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          name="senha"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ this.handleChange }
          value={ senha }
        />
        <button
          type="button"
          disabled={ !validation }
          onClick={ this.handleClick }
        >
          {' '}
          Entrar
          {' '}

        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
