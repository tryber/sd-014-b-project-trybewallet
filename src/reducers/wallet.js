// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FAILED_REQUEST, GET_COINS } from '../actions/coinsAction';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: true,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
      isLoading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      isLoading: true,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
