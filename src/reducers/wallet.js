// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSES, ADD_CURRENCIES, UPDATE_TOTAL_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

export default function reducerWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case UPDATE_TOTAL_EXPENSES:
    return {
      ...state,
      totalExpenses: action.payload,
    };
  default:
    return state;
  }
}
