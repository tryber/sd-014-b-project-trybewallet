import { GET_CURRENCIES_DATA_SUCCES, SET_WALLET_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_DATA_SUCCES:
    return { ...state, currencies: action.payload };
  case SET_WALLET_DATA:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
