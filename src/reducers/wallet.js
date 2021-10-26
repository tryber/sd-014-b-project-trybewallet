// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { WALLET_SET_INFO } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_SET_INFO:
    return ({
      ...state,
      currencies: action.object.currencies,
      expenses: [...state.expenses,
        { id: action.object.id,
          value: action.object.value,
          description: action.object.description,
          currency: action.object.currency,
          method: action.object.method,
          tag: action.object.tag,
          exchangeRates: action.object.exchangeRates,
        }],
      totalExpenses: action.object.totalExpenses,
    });
  default:
    return state;
  }
};

export default wallet;
