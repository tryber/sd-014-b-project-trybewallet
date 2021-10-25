import { FECTH_ACTION, WALLET_ACTION } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [''],
  expenses: [],
  currency: 'BRL',
  fetchoOn: false,
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
    };

  default:
    return state;
  }
};

export default wallet;
