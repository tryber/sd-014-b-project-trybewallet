// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FAILED_REQUEST, GET_COINS } from '../actions/coinsAction';
import { GET_EXCHANGE_RATE } from '../actions/currentExchangeRateAction';
import { ADD_EXPENSE } from '../actions/addExpensesAction';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: true,
  error: '',
  currentExchangeRate: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
      isLoading: false,
    };
  case GET_EXCHANGE_RATE:
    return {
      ...state,
      currentExchangeRate: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, exchangeRates: state.currentExchangeRate },
      ],
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
