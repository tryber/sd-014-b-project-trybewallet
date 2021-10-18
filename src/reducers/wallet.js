import { REQUEST_WALLET, REQUEST_API, REQUEST_API_SUCCESS,
  REQUEST_API_ERROR } from '../actions';

const INNITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_WALLET:
    return { ...state, wallet: action.payload };

  case REQUEST_API:
    return {
      ...state, isFetching: true,
    };

  case REQUEST_API_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: Object.keys(action.payload),
    };

  case REQUEST_API_ERROR:
    return {
      ...state,
      isFetching: false,
      currencies: Error,
    };

  default:
    return state;
  }
};

export default wallet;
