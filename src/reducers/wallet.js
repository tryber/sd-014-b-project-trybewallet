import { CURRENCIES, EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
