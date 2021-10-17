import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Form from './components/Form';

export default function Wallet() {
  const { email } = useSelector((state) => state.user);
  return (
    <div>
      <Header email={ email }>
        <Form />
      </Header>
    </div>
  );
}

// teste de erro no avaliador automático do github
