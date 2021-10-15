// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_RATES, DELETE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_RATES:
    return {
      ...state,
      expenses: [...state.expenses, action.rates],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.id),
      ],
    };

  default:
    return state;
  }
};

export default walletReducer;
