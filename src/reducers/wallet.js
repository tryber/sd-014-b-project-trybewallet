import { EXPENSES } from '../actions';

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
  default:
    return state;
  }
}
