// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { EXPENSES, CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
  case CURRENCIES:
    return ({
      ...state,
      currencies: action.currencies,
    });
  case EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
