import { REQUEST_CURRENCIES } from "../actions";

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
}

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
      default:
        return state;
  }
}

export default wallet;
