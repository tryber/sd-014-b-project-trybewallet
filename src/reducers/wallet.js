// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FAILED_REQUEST, GET_INPUTFORM, GET_MONEY, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: 'Erro',
  exchangeRates: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
    };
  case GET_MONEY:
    return {
      ...state,
      currencies: Object.keys(action.payload)
        .filter((money) => money !== 'USDT'),
      exchangeRates: action.payload,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.error,
    };
  case GET_INPUTFORM:
    return {
      ...state,
      expenses: action.payload,
      exchangeRates: action.payload,
    }
  default:
    return state;
  }
};

export default wallet;
