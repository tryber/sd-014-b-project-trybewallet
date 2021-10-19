import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as ActionsCreators from '../actions/index';

// func retirada do slack, colaboracao do amigo michael turma 14b
function isEmailValid(email) {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email);
}

const six = 6;

function Login({ setEmailGlobal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const button = useRef(null);

  function isPasswordValid(pw) {
    return pw.length > six;
  }

  return (
    <>
      <input
        type="email"
        data-testid="email-input"
        placeholder="E-mail"
        onChange={ (event) => {
          setEmail(event.target.value);
        } }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="password"
        onChange={ (event) => {
          setPassword(event.target.value);
        } }
      />
      <button
        ref={ button }
        disabled={ !isEmailValid(email) || !isPasswordValid(password) }
        type="submit"
        onClick={ () => {
          setEmailGlobal(email);
          history.push('/carteira');
        } }
      >
        Entrar
      </button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionsCreators, dispatch);

Login.propTypes = {
  setEmailGlobal: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
