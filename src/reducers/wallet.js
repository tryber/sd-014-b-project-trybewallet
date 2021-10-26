// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES, RECEIVED_CURRENCIES, LOAD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: {},
  isFetching: false,
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVED_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
      isFetching: false,
    };
  case LOAD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.formState],
    };
  default:
    return state;
  }
}

export default wallet;
