const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};
const walletReducer = (state = INITIAL_STATE) => state;

export default walletReducer;
