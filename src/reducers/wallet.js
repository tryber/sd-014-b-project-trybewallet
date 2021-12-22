// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  RECEIVE_EXPENSES,
  RECEIVE_CURRENCY,
  FAILED_REQUEST,
  REMOVE_EXPENSES,
  EDIT_EXPENSES,
  UPDATE_EXPENSES,
} from '../actions/index';

const initialState = {
  currencies: [],
  expenses: [],
  allCurrencies: {},
  error: '',
  editing: false,
  editExpense: {},
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case RECEIVE_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.currency),
      allCurrencies: action.currency,
    };
  case FAILED_REQUEST:
    return { ...state, error: action.payload };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)],
    };
  case EDIT_EXPENSES:
    return {
      ...state,
      editing: true,
      editExpense: state.expenses.find((expense) => expense.id === action.payload),
    };
  case UPDATE_EXPENSES:
    return {
      ...state,
      editing: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id === state.editExpense.id) {
          return {
            ...action.payload,
            exchangeRates: expense.exchangeRates,
            id: expense.id,
          };
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
