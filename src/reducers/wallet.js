// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCY,
  GET_CURRENCY,
  ADD_EXPENSES,
  REMOVE_EXPENSES,
  EDIT_EXPENSES,
  ADD_EDIT_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentCurrencies: {},
  isFetching: false,
  error: '',
  editExpense: {},
  isEdit: false,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCY:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.payload),
      currentCurrencies: action.payload,
      isFetching: false,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  case EDIT_EXPENSES:
    return {
      ...state,
      editExpense: state.expenses.find(({ id }) => id === action.payload),
      isEdit: true,
    };
  case ADD_EDIT_EXPENSES:
    return {
      ...state,
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
      isEdit: false,
    };
  default:
    return state;
  }
}

export default walletReducer;
