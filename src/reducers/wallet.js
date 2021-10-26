import { GET_API_DATA } from '../actions';

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
      currencies: Object.keys(action.data),
    };
  default:
    return state;
  }
}

export default wallet;
