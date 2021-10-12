import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useForm from '../components/useForm';
import userLogin from '../actions/index';

function Login(props) {
  const [{ values }, handleChange, handleDisabled] = useForm();

  const handleSubmit = () => {
    const { history, dispatchValues } = props;
    dispatchValues(values);
    history.push('/carteira');
  };

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
          placeholder="Digite sua Senha"
          value={ values.userPassword }
          onChange={ handleChange }
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => handleSubmit() }
          disabled={ handleDisabled() }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchValues: (state) => dispatch(userLogin(state)) });
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchValues: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
