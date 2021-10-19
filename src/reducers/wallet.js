import { SET_COINS, SET_OBJECT_COINS } from '../actions';

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
  case SET_OBJECT_COINS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expense,
          exchangeRates: action.objectCoins,
        },
      ],
    };
  default:
    return state;
  }
};

export default reducerWallet;
