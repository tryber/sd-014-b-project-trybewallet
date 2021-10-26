import { GET_CURRENCY, FAILED_REQUEST } from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  error: '',
};

function currencyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      error: action.payload,
    };

  default:
    return state;
  }
}

export default currencyReducer;
