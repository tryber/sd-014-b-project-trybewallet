// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES, GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((currency) => currency !== 'USDT'),
    };
  default:
    return state;
  }
};

export default wallet;
