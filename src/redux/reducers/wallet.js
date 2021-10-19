import { GET_DATA, SAVE_EXPENSES } from '../../redux/actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_DATA:
    return {
      ...state,
      currencies: Object.keys(action.data),
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.data],
    };
  default:
    return state;
  }
};

export default wallet;