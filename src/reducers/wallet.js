const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = INITIAL_STATE) => state;

export default walletReducer;

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
