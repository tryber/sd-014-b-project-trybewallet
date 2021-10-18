// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_WALLET_VALUE } from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return { ...state, wallet: action.load };
  default:
    return state;
  }
};

export default wallet;
