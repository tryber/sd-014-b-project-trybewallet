// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SUBMIT_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_CURRENCIES:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
