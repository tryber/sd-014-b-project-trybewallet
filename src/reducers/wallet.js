import { WALLET_EXPENSES, GET_COINS } from '../actions';

const INITIAL_STATE = {
  totalExpenses: 0,
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_EXPENSES:
    return {
      ...state,
    };
  case GET_COINS:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
}

export default wallet;
