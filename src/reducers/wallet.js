import { LOAD_API } from '../actions';

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
      currenciesApi: action.payload,
    };
  // case add_new:
  //   return {
  //     ...state,
  //     expenses: [...state.expenses, action.payload],
  //   };
  default:
    return state;
  }
}

export default walletReducer;
