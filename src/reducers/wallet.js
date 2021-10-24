import {
  SUBMIT_WALLET_EXPENSES,
  SUBMIT_WALLET_CURRENCIES,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  ADD_EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editId: '',
  renderFormEdit: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_WALLET_EXPENSES:
    return {
      ...state,
      loading: false,
      expenses: [...state.expenses, { ...action.expense,
        exchangeRates: action.response }],
    };
  case SUBMIT_WALLET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editId: action.payload,
      renderFormEdit: true,
    };
  case ADD_EDIT_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
      editId: '',
      renderFormEdit: false,
    };
  default:
    return state;
  }
};

export default wallet;
