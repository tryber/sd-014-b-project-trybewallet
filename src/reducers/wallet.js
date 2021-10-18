// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
  exchageRates: {},
};

export default function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case 'fetch':
    return { ...state, isFetching: true };
  case 'wallet':
    delete action.json.USDT;
    return {
      ...state,
      exchageRates: { ...action.json },
      currencies: Object.keys(action.json).filter((moeda) => moeda !== 'USDT'),
      isFetching: false,
    };
  case 'button':
    return {
      ...state,
      expenses: [...state.expenses, ...action.expenses],
    };
  default:
    return state;
  }
}
