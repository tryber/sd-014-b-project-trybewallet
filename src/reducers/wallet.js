// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_WALLET, GET_DATA, SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_WALLET:
    return { ...state };
  case GET_DATA:
    return {
      ...state,
      currencies: Object.keys(action.data),
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.data],
    };
  default:
    return state;
  }
};

export default wallet;
