// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SUBMIT_CURRENCIES, SUBMIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchageRates: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_CURRENCIES:
    return { ...state, currencies: action.payload };
  case SUBMIT_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  default:
    return state;
  }
};

export default wallet;
