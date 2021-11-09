import { ADD_EXPENSE, CURRENCIES_INFO } from '../actions/walletActions';

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
  default:
    return state;
  }
};

export default walletReducer;
