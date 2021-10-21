// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_CURRENCIES, SET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_CURRENCIES:
    return { ...state, currencies: action.payload };
  case SET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload.expenses] };
  default:
    return state;
  }
}

export default wallet;
