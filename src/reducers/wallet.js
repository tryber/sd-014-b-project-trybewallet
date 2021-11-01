// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_INFO, ALL_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ALL_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case WALLET_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
