import { CHANGE_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_WALLET:
    return {
      ...state,
      currencies: action.wallet.currencies,
      expenses: action.wallet.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
