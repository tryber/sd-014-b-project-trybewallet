import { WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: {},
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return { state: action.state };
  default:
    return state;
  }
}

export default wallet;
