import React, { useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRates } from '../actions/index';
import Form from './formComponent/Form';

const INITIAL_STATE = {
  valor: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

const reducer = (state, { field, value }) => ({ ...state, [field]: value });

export default function AddExpense() {
  const [localState, setState] = useReducer(reducer, INITIAL_STATE);
  const [counter, addCounter] = useState(0);
  const { valor, description, currency, method, tag } = localState;
  const coins = useSelector((state) => state.wallet.currencies);
  // const exchangeRates = useSelector((state) => state.wallet.rates);
  const dispatch = useDispatch();

  const handleChange = ({ target: { id, value } }) => {
    setState({ field: id, value });
  };
  const addExpense = () => {
    const expense = {
      id: counter,
      value: valor,
      description,
      currency,
      method,
      tag,
    };
    dispatch(fetchRates(expense));
    addCounter(counter + 1);
  };

  return (
    <Form
      va={ valor }
      desc={ description }
      curr={ currency }
      met={ method }
      tag={ tag }
      onC={ handleChange }
      coins={ coins }
      addE={ addExpense }
    />
  );
}
