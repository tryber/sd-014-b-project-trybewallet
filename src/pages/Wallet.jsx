import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Form from '../components/form/Form';

export default function Wallet() {
  const [formState, setState] = useState({
    amountExpenses: 0,
    description: '',
    currency: '',
    paymentMethod: '',
    tag: '',
  });

  const { email } = useSelector((state) => state.user);

  function handleChange(event) {
    const { name, value } = event.target;
    setState({ ...formState, [name]: value });
  }

  return (
    <Header
      email={ email }
      form={ <Form formState={ formState } handleChange={ handleChange } /> }
    />
  );
}
