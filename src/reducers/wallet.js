// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API_START, REQUEST_API_SUCCESS } from '../actions/currencies';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API_START: {
    return {
      ...state,
      isLoading: action.payload.isLoading,
    };
  }
  case REQUEST_API_SUCCESS: {
    return {
      ...state,
      currencies: action.payload.currencies,
      isLoading: action.payload.isLoading,
    };
  }
  default:
    return state;
  }
};

export default wallet;
