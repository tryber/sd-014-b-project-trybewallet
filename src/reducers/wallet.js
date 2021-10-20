// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { WALLET_SET_INFO } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_SET_INFO:
    return ({
      ...state,
      currencies: action.object.currencies,
      expenses: action.object.expenses,
    });
  default:
    return state;
  }
};

export default wallet;
