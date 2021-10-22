import {
  SAVE_CURRENCIES,
  SAVE_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
  EDITED_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseEdit: {
    id: [],
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Trabalho',
    exchangeRates: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.expenses,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenseEdit: action.expense,
    };
  case EDITED_EXPENSE:
    return {
      ...state,
      expenses: [...action.editedExpenses],
    };
  default:
    return state;
  }
}

export default wallet;
