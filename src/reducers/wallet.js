import { WALLET_EXPENSES, SAVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  totalExpenses: 0,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_EXPENSES:
    return {
      ...state,
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
};

export default wallet;
