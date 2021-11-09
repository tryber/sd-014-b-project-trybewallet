const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SUBMIT_WALLET':
    return action.payload;
  default:
    return state;
  }
};

export default wallet;
