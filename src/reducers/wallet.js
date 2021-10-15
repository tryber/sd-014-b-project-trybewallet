// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, REQUEST_API } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  isFetching: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isFetching: true,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
      isFetching: false,
    };
  default:
    return state;
  }
};

export default walletReducer;
