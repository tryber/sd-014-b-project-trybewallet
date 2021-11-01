import { LOAD_API, SAVE_EXPENSES, UPDATE_RATES, DELETE_EXPENSES } from '../actions';

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

  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload, exchangeRates: state.currenciesApi },
      ],
    };

  case UPDATE_RATES:
    return {
      ...state,
      currenciesApi: action.payload,
    };

  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload),
      ],
    };

  default:
    return state;
  }
}

export default walletReducer;
