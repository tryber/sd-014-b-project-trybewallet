// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCY, GET_CURRENCY, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentCurrencies: {},
  isFetching: false,
  error: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.payload),
      currentCurrencies: action.payload,
      isFetching: false,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default walletReducer;
