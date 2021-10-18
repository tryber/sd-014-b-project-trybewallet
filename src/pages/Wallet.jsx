import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Form from '../components/form/Form';

export default function Wallet() {
  const [formState, setFormState] = useState({
    amountExpenses: 0,
    description: '',
    currency: '',
    paymentMethod: '',
    tag: '',
    currencies: [],
  });

  const { email } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://economia.awesomeapi.com.br/json/all',
      );
      const api = await response.json();
      const currencies = Object.keys(api).filter(
        (currency) => currency !== 'USDT' && currency !== 'DOGE',
      );
      setFormState((state) => ({ ...state, currencies }));
    };
    fetchData();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  return (
    <Header email={ email }>
      <Form formState={ formState } handleChange={ handleChange } />
    </Header>
  );
}
