import { REQUEST_API_SUCCESS } from '../actions/currencies';
import { ADD_DATA_EXPENSES, DELETE_EXPENSES } from '../actions/expenses';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API_SUCCESS: {
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  }
  case ADD_DATA_EXPENSES: {
    return {
      ...state,
      // inspirado em https://github.com/tryber/sd-014-b-project-trybewallet/blob/thomas-trybewallet/src/reducers/wallet.js
      expenses: [...state.expenses, action.payload.expenses],
    };
  }
  case DELETE_EXPENSES: {
    const expenses = state.expenses
      .filter((expense) => expense.id !== action.payload.id);
    return {
      ...state,
      expenses,
    };
  }
  default:
    return state;
  }
};

export default wallet;
