import { ADD_CURRENCY, ADD_EXPENSE } from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload], // atenção!!
    };
  default:
    return state;
  }
}

export default walletReducer;
