import { SET_WALLET } from '../actions';

const initialState = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_WALLET:
    return { ...state, wallet: action.payload };
  default:
    return state;
  }
};

export default walletReducer;
