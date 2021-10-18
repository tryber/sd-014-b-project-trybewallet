const INICIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_WALLET':
    return {
      ...state,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
