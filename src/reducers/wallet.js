import { REQUEST_WALLET } from '../actions';

const INNITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const user = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_WALLET:
    return { ...state, wallet: action.wallet };
  default:
    return state;
  }
};

export default user;
