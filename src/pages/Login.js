import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserEmail } from '../actions';
import validate from '../helper/validate';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setEnabled(validate(email, password));
  }, [password, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserEmail(email));
    history.push('/carteira');
  };

  return (
    <form onSubmit={ (e) => handleSubmit(e) }>
      <input
        type="email"
        data-testid="email-input"
        placeholder="E-mail"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="submit"
        disabled={ !enabled }
      >
        Entrar
      </button>
    </form>
  );
};

export default Login;
