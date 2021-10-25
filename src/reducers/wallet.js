// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, SAVE_EXPENSES } from '../actions/index';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload),
      exchangeRates: action.payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
