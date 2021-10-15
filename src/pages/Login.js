import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeUser } from '../actions';
// import user from '../reducers/user';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  changePage() {
    const { email } = this.state;
    const { history, dispatchUser } = this.props;
    dispatchUser(email);
    history.push('/carteira');
  }

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

  render() {
    const emailValid = (email) => {
      const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regexEmail.test(email);
    };

    const { email, senha, redirect } = this.state;
    // const { changeUser } = this.props;
    const validEmailState = emailValid(email);
    const numberMaxCharacters = 6;

    const buttonEnable = validEmailState && senha.length >= numberMaxCharacters;

    if (redirect === true) {
      return <Redirect to="/carteira" />;
    }

    return (
      <section>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            value={ email }
            onChange={ this.handleChange }
            type="text"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="email">
          Senha:
          <input
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
            type="text"
            data-testid="password-input"
          />
        </label>
        <button
          disabled={ !buttonEnable }
          data-testid="login"
          type="button"
          onClick={ this.changePage }
        >
          Entrar
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUser: (email) => dispatch(changeUser(email)),
});

Login.propTypes = {
  dispatchUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
