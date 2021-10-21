import { REQUEST_CURRENCY, ADD_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, { type, currencies, expenses }) {
  switch (type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      currencies,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses,
    };
  default:
    return state;
  }
}

export default wallet;
