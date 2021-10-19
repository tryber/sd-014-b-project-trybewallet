// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  error: '',
};

const fetchCurrenciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      wallet: {
        currencies: action.payload,
      },
    };
  case FAILED_REQUEST:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

export default fetchCurrenciesReducer;
