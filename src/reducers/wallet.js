import {
  IS_FETCHING, GET_CURRENCIES,
  GET_EXPENSES_INFO, CLEAR_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case IS_FETCHING:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case GET_EXPENSES_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case CLEAR_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload),
      ],
    };
  default:
    return state;
  }
}

export default wallet;
