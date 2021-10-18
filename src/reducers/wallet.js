import { EXPENSES, CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case CURRENCIES:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
