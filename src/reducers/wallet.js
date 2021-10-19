import { ADD_EXPENSE, GET_CURRENCIES, REMOVE_EXPENSE, REQUEST_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload)
        .filter((currencyCode) => currencyCode !== 'USDT'),
      exchangeRates: action.payload,
    };
  case REQUEST_ERROR:
    return {
      ...state,
      error: action.error,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)],
    };
  default:
    return state;
  }
};

export default wallet;
