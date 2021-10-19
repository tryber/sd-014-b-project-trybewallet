// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { WALLET_SET_INFO } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_SET_INFO:
    return ({
      ...state,
      wallet: {
        ...state.wallet,
        currencies: action.currencies,
        expenses: action.expenses,
      },
    });
  default:
    return state;
  }
};

export default wallet;
