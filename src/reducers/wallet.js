import { ADD_EXPENSE, CURRENCIES_INFO, UPDATE_EXPENSES } from '../actions/walletActions';

const INITIAL_STATE = {
  currenciesData: {},
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_INFO:
    return {
      ...state,
      currenciesData: action.currenciesData,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenseData],
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: action.updatedExpenses,
    };
  default:
    return state;
  }
};

export default walletReducer;
