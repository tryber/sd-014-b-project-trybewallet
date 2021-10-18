import { REQUEST_COINS, RECEIVE_COINS, RECEIVE_RATES, REQUEST_RATES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  rates: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COINS || REQUEST_RATES:
    return { ...state, isFetching: true };
  case RECEIVE_COINS:
    return { ...state, isFetching: false, currencies: action.coins };
  case RECEIVE_RATES:
    return { ...state, isFetching: false, expenses: [...state.expenses, action.rates] };
  default:
    return state;
  }
};

export default wallet;
