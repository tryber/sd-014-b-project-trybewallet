import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrencies, addExpenses } from '../actions/index';
import Header from '../components/header/Header';
import Form from '../components/form/Form';

function filterAPI(response) {
  return Object.keys(response).filter(
    (currency) => currency !== 'USDT' && currency !== 'DOGE',
  );
}

export default function Wallet() {
  const [formState, setFormState] = useState({
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });
  const { email } = useSelector((state) => state.user);
  const { currencies, expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://economia.awesomeapi.com.br/json/all',
      );
      const result = filterAPI(await response.json());
      dispatch(setCurrencies(result));
    };
    fetchData();
  }, [dispatch]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  async function handleSubmit() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();
    dispatch(addExpenses({ ...formState, exchangeRates }));
    setFormState((state) => ({ ...state, id: state.id + 1 }));
  }

  return (
    <Header email={ email } expenses={ expenses }>
      <Form
        formState={ { ...formState, currencies } }
        handleChange={ handleChange }
      >
        <button type="button" onClick={ handleSubmit }>
          Adicionar despesas
        </button>
      </Form>
    </Header>
  );
}
