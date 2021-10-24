// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { VALID_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VALID_WALLET:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default walletReducer;
