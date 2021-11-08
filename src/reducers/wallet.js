import {
  REQUEST_CURRENCIES,
  GET_CURRENCIES,
  ADD_EXPENSES,
  REMOVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentPrices: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: [
        ...Object.keys(action.payload).filter((currency) => currency !== 'USDT'),
      ],
      currentPrices: action.payload,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, exchangeRates: state.currentPrices },
      ],
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload.id),
      ],
    };
  default:
    return state;
  }
};

export default wallet;
