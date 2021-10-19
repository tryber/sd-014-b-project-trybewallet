import { GET_CURRENCIES, REQUEST_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case REQUEST_ERROR:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default wallet;
