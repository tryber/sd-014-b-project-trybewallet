import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';
import Form from '../components/form/Form';

function filterAPI(response) {
  return Object.keys(response).filter(
    (currency) => currency !== 'USDT' && currency !== 'DOGE',
  );
}

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
      const currencies = filterAPI(await response.json());
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
