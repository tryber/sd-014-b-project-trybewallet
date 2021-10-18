// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES } from '../actions';

const INICIAL_STATE = {
  expenses: [],
  currencies: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default wallet;
