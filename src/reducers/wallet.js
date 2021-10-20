import { API_SUCCESS, ADD_NEW_TRANSACTION } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  apiCurrencies: {},
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((currency) => currency !== 'USDT'),
      apiCurrencies: action.payload,
    };
  case ADD_NEW_TRANSACTION:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default walletReducer;
