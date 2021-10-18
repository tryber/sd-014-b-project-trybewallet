const INITIAL = {
  localCurrency: 'BRL',
  hasCurrencies: false,
  editor: false,
  currencies: [],
  expenses: [],
  editExpense: {},
};

const GET_CURRENCIES = 'GET_CURRENCIES';
const CURRENCY_LOADED = 'CURRENCY_LOADED';
const EXPENSE_ENTRY = 'EXPENSE_ENTRY';
const DELETE_EXPENSE = 'DELETE_EXPENSE';
const INIT_EDIT_EXPENSE = 'INIT_EDIT_EXPENSE';
const END_EDIT_EXPENSE = 'END_EDIT_EXPENSE';

const walletReducer = (state = INITIAL, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: [...action.value], editExpense: { edit: false } };
  case CURRENCY_LOADED:
    return { ...state, hasCurrencies: true };
  case EXPENSE_ENTRY:
    return { ...state, expenses: action.value, newEntry: false };
  case DELETE_EXPENSE:
    return { ...state, expenses: action.value };
  case INIT_EDIT_EXPENSE:
    return { ...state, editor: true, editExpense: action.value };
  case END_EDIT_EXPENSE:
    return { ...state, editor: false, editExpense: {}, expenses: action.value };
  default:
    return state;
  }
};

export default walletReducer;
