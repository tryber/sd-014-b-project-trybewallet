import { API_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  apiCurrenciesNow: {},
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case API_SUCCESS:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((currency) => currency !== 'USDT'),
      apiCurrenciesNow: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
