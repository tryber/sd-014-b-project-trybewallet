import { CURRENCIES, EXPENSES, REQUEST_COINS, RECEIVE_COINS } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COINS:
    return { ...state, isFetching: true };
  case RECEIVE_COINS:
    return { ...state, isFetching: false, currencies: action.coins };
  case CURRENCIES:
    return { ...state, currencies: action.payload };
  case EXPENSES:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
};

export default wallet;
