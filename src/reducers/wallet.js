// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return { ...state,
      currencies: Object.keys(action.payload).filter((element) => element !== 'USDT') };
  default:
    return state;
  }
}

export default wallet;
