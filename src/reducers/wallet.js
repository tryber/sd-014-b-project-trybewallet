import { DELIVER_CURRENCIES, REQUEST_CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case DELIVER_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default wallet;
