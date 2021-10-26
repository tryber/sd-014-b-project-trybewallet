// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { VALID_WALLET, VALID_WALLET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALID_WALLET:
    return {
      ...state,
      currencies: action.payload,
    };
  case VALID_WALLET_EXPENSES:
    return {
      ...state,
      expenses: action.payload,
    };

  default:
    return state;
  }
};

export default walletReducer;
