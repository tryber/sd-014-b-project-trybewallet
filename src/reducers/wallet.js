const INITIAL = {
  localCurrency: 'BRL',
  hasCurrencies: false,
  newEntry: false,
  currencies: [],
  expenses: [],
};

const GET_CURRENCIES = 'GET_CURRENCIES';
const CURRENCY_LOADED = 'CURRENCY_LOADED';
const EXPENSE_CREATE = 'EXPENSE_CREATE';
const EXPENSE_ENTRY = 'EXPENSE_ENTRY';
const DELETE_EXPENSE = 'DELETE_EXPENSE';

const walletReducer = (state = INITIAL, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: [...action.value] };
  case CURRENCY_LOADED:
    return { ...state, hasCurrencies: true };
  case EXPENSE_CREATE:
    return { ...state, newEntry: true };
  case EXPENSE_ENTRY:
    return { ...state, expenses: action.value, newEntry: false };
  case DELETE_EXPENSE:
    return { ...state, expenses: action.value };
  default:
    return state;
  }
};

export default walletReducer;
