import { FECTH_ACTION, WALLET_ACTION, SAVE_STATE } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [''],
  expenses: [],
  currency: 'BRL',
  fetchoOn: false,
  APIresult: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FECTH_ACTION:
    return {
      ...state,
      fetchoOn: true,
    };

  case WALLET_ACTION:
    return {
      ...state,
      currencies: Object.keys(action.promise).filter((moeda) => moeda !== 'USDT'),
      fetchoOn: false,
      APIresult: action.promise,
    };

  case SAVE_STATE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  default:
    return state;
  }
};

export default wallet;
