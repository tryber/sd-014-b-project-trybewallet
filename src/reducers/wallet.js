import
{ SEND_WALLET_INFO, REQUEST_CURRENCIES, SEND_WALLET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
    };
  case SEND_WALLET_INFO:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
    };
  case SEND_WALLET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
