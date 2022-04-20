import {
  EDIT_EXPENSE,
  SUBMIT_CURRENCIES,
  SUBMIT_EXPENSE,
  UPDATE_EXPENSES,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  editor: false,
  idToEdit: 0,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
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
