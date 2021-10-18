import { RECEIVE_CURRENCIES_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES_INFO:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
