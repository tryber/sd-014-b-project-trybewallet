import { CHANGE_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CHANGE_WALLET:
    return;
  default:
    return state;
  }
}

export default wallet;
