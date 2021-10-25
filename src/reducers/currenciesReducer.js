import { GET_CURRENCY, FAILED_REQUEST } from '../actions/currenciesAction';

const INITIAL_STATE = {
  currencies: {},
  loading: true,
  error: '',
};

const currenciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };

  case FAILED_REQUEST:
    return {
      ...state,
      loading: true,
      error: action.payload,
    };

  default:
    return state;
  }
};

export default currenciesReducer;
