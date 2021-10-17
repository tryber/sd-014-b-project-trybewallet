import { SET_COINS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_COINS:
    return {
      ...state,
      currencies: action.coins,
    };
  default:
    return state;
  }
};

export default reducerWallet;
