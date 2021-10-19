import {
  ADD_NEW_EXPENSE,
  DELIVER_CURRENCIES,
  EDIT_EXPENSES,
  REDUCE_TOTAL,
  REQUEST_CURRENCIES,
} from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  total: 0.00,
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
  case EDIT_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
    };
  case REDUCE_TOTAL:
    return {
      ...state,
      total: action.total,
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
