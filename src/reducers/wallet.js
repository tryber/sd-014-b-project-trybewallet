import { CURRENCIES_ACTION, EXPENSES_ACTION } from '../actions';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [0],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_ACTION:
    return {
      ...state,
      currencies: action.currencies,
    };
  case EXPENSES_ACTION:
    return {
      ...state,
      expenses: action.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
