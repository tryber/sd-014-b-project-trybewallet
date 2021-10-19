import { LIST_CURRENCY, ADD_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case (LIST_CURRENCY):
    return ({
      ...state,
      currencies: Object.keys(action.payload),
    });
  case (ADD_EXPENSE):
    return ({
      ...state,
      expenses: [...state.expenses, action.payload],
    });
  default:
    return state;
  }
};

export default wallet;
