// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SEND_RATES,
  DELETE_EXPENSE, SEND_CURRENCIES,
  EDIT_EXPENSE,
  ADD_EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseToEdit: {},
  isEditing: false,
};
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_RATES:
    return {
      ...state,
      expenses: [...state.expenses, action.rates],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.id),
      ],
    };
  case SEND_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenseToEdit: state.expenses.find((expense) => expense.id === action.id),
      isEditing: true,
    };
    // Luiz Gustavo me ajudou nessa parte!
  case ADD_EDIT_EXPENSE:
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

  default:
    return state;
  }
};

export default walletReducer;
