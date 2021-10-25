import { WALLET_DATA, BUTTON_ADD } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// remover as moedas de turismo
const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_DATA:
    return {
      ...state,
      currencies: action.data,
    };
  case BUTTON_ADD:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.allState,
      ],
    };
  default:
    return state;
  }
};

export default wallet;
