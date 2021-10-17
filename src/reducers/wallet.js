// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

export default function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case 'fetch':
    return { ...state, isFetching: true };
  case 'wallet':
    return {
      ...state,
      currencies: Object.keys(action.json).filter((moeda) => moeda !== 'USDT'),
      isFetching: false,
    };
  default:
    return state;
  }
}
