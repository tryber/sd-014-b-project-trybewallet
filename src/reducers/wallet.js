// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case (SAVE_CURRENCIES):
    return ({ ...state, currencies: action.payload });
  default:
    return state;
  }
};

export default walletReducer;
