import {
  RECEIVE_CURRENCIES_INFO, SET_TOTAL_EXPENSES, SEND_EXAPENSES_INFO,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES_INFO:
    return { ...state, currencies: action.payload };
  case SEND_EXAPENSES_INFO:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case SET_TOTAL_EXPENSES:
    return { ...state, totalExpenses: state.totalExpenses + action.payload };
  default:
    return state;
  }
};

export default wallet;
