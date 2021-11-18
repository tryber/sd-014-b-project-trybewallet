// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES_API, GET_DATA_CURRENCIES, SET_EXPENSES, DELETE_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_DATA_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
      isLoading: false,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
      isLoading: false,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
