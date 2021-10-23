import {
  GET_API_DATA,
  FAILED_REQUEST,
  ADD_EXPENSE,
} from '../actions/walletAction';

const initialState = {
  currencies: [],
  expenses: [],
  error: '',
  loading: true,
};

function walletReducer(state = initialState, action) {
  switch (action.type) {
  case GET_API_DATA:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      wallet: action.error,
      loading: true,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}

export default walletReducer;
