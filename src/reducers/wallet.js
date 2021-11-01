// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_INFO } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFO:
    return ({
      ...state,
      wallet: action.payload,
    });
  default:
    return state;
  }
}

export default wallet;
