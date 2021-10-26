import { ADD_EXPENSE, EDIT_EXPENSE, GET_CURRENCIES,
  REMOVE_EXPENSE, REQUEST_ERROR, UPDATE_EDITED_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
  error: '',
  isEditing: false,
  expenseToBeEdited: {},
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
  case EDIT_EXPENSE:
    return {
      ...state,
      isEditing: true,
      expenseToBeEdited: state.expenses.find((expense) => expense.id === action.payload),
    };
  case UPDATE_EDITED_EXPENSE:
    return {
      ...state,
      isEditing: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
