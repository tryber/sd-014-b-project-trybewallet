import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../components/useForm';

function Login(props) {
  const [{ values }, handleChange] = useForm();
  const { history } = props;
  return (
    <div className="center">
      <form className="shadow p-3 mb-5 bg-body rounded">
        <img
          src="https://www.clipartmax.com/png/full/141-1410805_%C2%A0-stock-photography.png"
          alt="wallet"
        />
        <input
          className="form-control"
          type="email"
          name="userEmail"
          data-testid="email-input"
          value={ values.userEmail }
          onChange={ handleChange }
          placeholder="Digite seu Email"
        />
        <input
          className="form-control"
          type="password"
          name="userPassword"
          data-testid="password-input"
          value={ values.userPassword }
          onChange={ handleChange }
          placeholder="Digite sua Senha"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => history.push('/carteira') }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
