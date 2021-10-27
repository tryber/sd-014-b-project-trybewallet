import { WALLET } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletInformation(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return ({
      ...state,
      email: action.wallet.currencies,
      password: action.wallet.expenses,
    });
  default:
    return state;
  }
}

export default walletInformation;
