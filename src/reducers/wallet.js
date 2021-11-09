// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SEND_CURRENCIES,
  ADD_EXPENSES,
  EDIT_EXPENSE,
  DELETE_EXPENSE,
  SEND_RATES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isEditing: false,
  expenseToEdit: {},
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === state.expenseToEdit.id) {
          return {
            ...action.expense,
            exchangeRates: expense.exchangeRates,
            id: expense.id,
          };
        }
        return expense;
      }),
      isEditing: false,
    };
  case SEND_RATES:
    return {
      ...state,
      expenses: [...state.expenses, action.rates],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.id)],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenseToEdit: state.expenses.find((expense) => expense.id === action.id),
      isEditing: true,
    };

  default:
    return state;
  }
};

export default walletReducer;
