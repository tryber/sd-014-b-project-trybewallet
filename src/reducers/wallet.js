import { SEND_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
};

const expensesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default expensesReducer;
