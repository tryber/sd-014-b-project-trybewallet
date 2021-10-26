import { SEND_COINS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_COINS:
    return {
      ...state,
      expenses: [...state.expenses, action.rates],
    };

  default:
    return state;
  }
};

export default walletReducer;
