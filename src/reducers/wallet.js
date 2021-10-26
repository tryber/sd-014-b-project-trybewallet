// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  EDIT_EXPENSE,
  SUBMIT_CURRENCIES,
  SUBMIT_EXPENSE,
  UPDATE_EXPENSES,
} from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
  },
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case SUBMIT_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SUBMIT_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
      editor: false,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.expenseId,
    };
  default:
    return state;
  }
};

export default wallet;
