import { ADD_EXPENSE, REQUEST_COINS, RECEIVE_COINS } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
  currencyCoins: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COINS:
    return {
      ...state,
    };
  case RECEIVE_COINS:
    return {
      ...state,
      currencies: Object.keys(action.payload)
        .filter((currencie) => currencie !== 'USDT'),
      currencyCoins: action.payload,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.payload, exchangeRates: state.currencyCoins,
        },
      ],
    };
  default:
    return state;
  }
};

export default wallet;
