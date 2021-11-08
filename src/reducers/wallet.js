import { CURRENCIES_ACTION, EXPENSES_ACTION, CLEAR_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_ACTION:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES_ACTION:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case CLEAR_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((expense) => expense.id !== action.payload),
      ],
    };
  default:
    return state;
  }
};

export default wallet;
