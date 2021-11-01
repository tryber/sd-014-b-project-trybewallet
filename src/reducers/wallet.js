import { LOAD_API, SAVE_EXPENSES, UPDATE_RATES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currenciesApi: [],
};

// Organizado e refatorado com a ajuda do Glauco Lomenha, 14B
function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_API:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((currency) => currency !== 'USDT'),
    };

  case UPDATE_RATES:
    return {
      ...state,
      currenciesApi: action.payload,
    };

  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, exchangeRates: state.currenciesApi },
      ],
    };

  default:
    return state;
  }
}

export default walletReducer;
