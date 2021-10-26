// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API_START, REQUEST_API_SUCCESS } from '../actions/currencies';
import { ADD_DATA_EXPENSES } from '../actions/expenses';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: true,
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
  case ADD_DATA_EXPENSES: {
    return {
      ...state,
      // inspirado em https://github.com/tryber/sd-014-b-project-trybewallet/blob/thomas-trybewallet/src/reducers/wallet.js
      expenses: [...state.expenses, action.payload.expenses],
    };
  }
  default:
    return state;
  }
};

export default wallet;
