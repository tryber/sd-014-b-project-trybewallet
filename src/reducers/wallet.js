// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
      expenses: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
