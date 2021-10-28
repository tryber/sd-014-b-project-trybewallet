import { GET_API_DATA, SET_EXPENSES, DEL_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  /* case REQUEST_WALLET:
    return state; */
  case GET_API_DATA:
    return {
      ...state,
      currencies: action.data,
    };
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.data],
    };
  case DEL_EXPENSES:
    return {
      ...state,
      expenses: action.data,
    };
  default:
    return state;
  }
}

export default wallet;
