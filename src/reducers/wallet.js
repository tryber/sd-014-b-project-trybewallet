// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SEND_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
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
    };
  default:
    return state;
  }
};

export default walletReducer;
