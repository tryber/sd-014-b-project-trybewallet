// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { FAILED_REQUEST, GET_CURRENCIES, REQUEST_CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
  isFetching: false,
  error: '',
};

const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCIES:
    return { ...state, isFetching: true };
  case GET_CURRENCIES:
    return { ...state, currencies: payload, isFetching: false };
  case FAILED_REQUEST:
    return { ...state, error: payload, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
