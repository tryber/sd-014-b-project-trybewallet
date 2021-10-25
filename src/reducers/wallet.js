import { CREATE_EXPENSE, ERASE_EXPENSE } from '../actions';

const initialState = { expenses: [], total: 0 };

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case CREATE_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case ERASE_EXPENSE:
    return ({
      ...state,
      expenses: state.expenses.filter((exp) => exp !== action.payload),
    });
  default:
    return state;
  }
};

export default wallet;
