import { HANDLE_EXPENSES, SAVE_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case HANDLE_EXPENSES:
    return ({ ...state,
      expenses: [...state.expenses, action.payload] });
  case SAVE_CURRENCIES:
    return ({ ...state, currencies: action.payload });
  default:
    return state;
  }
};

export default wallet;
