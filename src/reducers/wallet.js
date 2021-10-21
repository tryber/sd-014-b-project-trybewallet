import { SET_WALLET_VALUE, SET_WALLET_EXPENSES } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const reducerWallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET_VALUE:
    return { ...state, currencies: action.payload };
  case SET_WALLET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default reducerWallet;
