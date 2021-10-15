const INITIAL = {
  currencies: 'BRL',
  expenses: 0,
};
const WALLET = 'WALLET';

const walletReducer = (state = INITIAL, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, [action.name]: action.value };
  default:
    return state;
  }
};

export default walletReducer;
