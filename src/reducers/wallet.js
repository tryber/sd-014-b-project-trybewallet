import { GET_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case (GET_CURRENCIES):
    return ({
      ...state,
      currencies: Object.keys(action.payload),
    });
  default:
    return state;
  }
};

export default wallet;
