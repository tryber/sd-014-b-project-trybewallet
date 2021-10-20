import { GET_CURRENCIES, FAILED_REQUEST } from '../actions/apiAction';
import { SET_WALLET } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: true,
  error: '',
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SET_WALLET:
    return {
      ...state,
      expenses: action.payload.expenses,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.payload.error,
      loading: true,
    };
  default:
    return state;
  }
};

export default wallet;
