import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendLogin } from '../actions';

// lógica abaixo vista em https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Lógica abaixo vista no repositório do Michael Caxias
// tópicos principais vistos: onchange, manuseio do dispatch para o redux e useState
// a constante enabled eu tinha feito de outra forma, mas a forma que ele fez
// achei mais elegante e inteligente.
function Login({ history, dispatchEmail }) {
  // Usando o State do Hook. Código abaixo
  // https://pt-br.reactjs.org/docs/hooks-state.html
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatchEmail(email);
    history.push('/carteira');
  }
  const minNumberPassword = 6;
  const enabled = (password.length >= minNumberPassword
    && validateEmail(email));
  return (
    <form>
      <label htmlFor="email-input">
        <input
          type="email"
          placeholder="Digite o E-mail"
          value={ email }
          required
          onChange={ ({ target: { value } }) => setEmail(value) }
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password-input">
        <input
          type="password"
          placeholder="Digite a Senha"
          value={ password }
          required
          onChange={ ({ target: { value } }) => setPassword(value) }
          data-testid="password-input"
        />
      </label>
      <button
        type="button"
        onClick={ handleSubmit }
        disabled={ !enabled }
      >
        Entrar

      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(sendLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchEmail: PropTypes.func.isRequired,
};
