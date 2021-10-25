import { ADD_EXPENSE } from '../actions/addExpenseAction';

const INITIAL_STATE = {
  expenses: [],
  nextID: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      expenses: [
        ...state.expenses,
        action.payload,
      ],
      nextID: state.nextID + 1,
    };

  default:
    return state;
  }
};

export default wallet;
