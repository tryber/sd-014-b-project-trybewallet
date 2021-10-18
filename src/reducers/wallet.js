import { GET_CURRENCIES, ADD_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case (GET_CURRENCIES):
    return ({
      ...state,
      currencies: Object.keys(action.payload),
    });
  case (ADD_EXPENSE):
    return ({
      ...state,
      expense: action.payload,
    });
  default:
    return state;
  }
};

export default wallet;
