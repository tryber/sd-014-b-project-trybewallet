// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { API_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'RESULTADO_API':
    return {
      currencies: Object.keys(action.payload),
    };
  case API_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
