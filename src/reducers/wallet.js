const INITIAL_WALLET_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },

};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default wallet;
