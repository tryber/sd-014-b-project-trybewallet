import { SEND_WALLET_INFO } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_WALLET_INFO:
    return {
      ...state, wallet: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
