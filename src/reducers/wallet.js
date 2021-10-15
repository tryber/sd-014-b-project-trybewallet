// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES, CURRENCIES } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case EXPENSES:
    return { };
  case CURRENCIES:
    return { };
  default:
    return state;
  }
}

export default wallet;
