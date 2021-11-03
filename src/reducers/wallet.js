import { EXPENSES, REMOVE } from '../actions';

const INITAL_STATE = ({
  expenses: [],
});

export default function reduceUser(state = INITAL_STATE, action) {
  switch (action.type) {
  case EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  case REMOVE:
    return {
      ...state,
      expenses: state.expenses.filter((item) => item.id !== action.payload.id),
    };
  default:
    return state;
  }
}
