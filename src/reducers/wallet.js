import { SAVE_WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_WALLET:
    return { ...state,
      wallet: { currencies: [action.value],
        expenses: [action.value] } };
  default:
    return { ...state };
  }
};

export default wallet;
