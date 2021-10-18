import { ADD_NEW_EXPENSE, DELIVER_CURRENCIES, REQUEST_CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case ADD_NEW_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expenses,
      ],
    };
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
