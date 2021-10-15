// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSE } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case EXPENSE:
    return {
      ...state,
      currencies: action.currency,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
