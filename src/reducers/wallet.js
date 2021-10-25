import {
  RECEIVE_CURRENCIES_INFO, RECEIVE_EXCHANGE_RATES_INFO, SEND_EXAPENSES_INFO
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES_INFO:
    return { ...state, currencies: action.payload };
  case SEND_EXAPENSES_INFO:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case RECEIVE_EXCHANGE_RATES_INFO:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
