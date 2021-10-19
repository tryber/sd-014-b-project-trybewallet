import { REQUEST_CURRENCY, ADD_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [
    {
      id: 0,
      valor: '0',
      descrição: '',
      moeda: '',
      método_de_pagamento: '',
      tag: '',
      exchangeRates: [''],
    },
  ],
};

function wallet(state = INITIAL_STATE, { type, currencies, expenses }) {
  switch (type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      currencies,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses,
    };
  default:
    return state;
  }
}

export default wallet;
