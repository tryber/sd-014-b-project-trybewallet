import {
  GET_CURRENCY,
  FAILED_REQUEST,
  ADD_EXPENSE,
  DELETE_EXPENSE,
} from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: true,
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      loading: true,
      error: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)],
    };
  default:
    return state;
  }
}

export default walletReducer;
