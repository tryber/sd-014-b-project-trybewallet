// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SUBMIT_CURRENCIES, EXPENSES_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_CURRENCIES:
    return { ...state, currencies: Object.keys(action.payload) };
  case EXPENSES_API:
    return { ...state,
      expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
