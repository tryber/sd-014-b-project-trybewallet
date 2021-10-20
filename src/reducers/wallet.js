import { CURRENCY_OK } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_OK:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
