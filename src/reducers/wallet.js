// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case 'wallet':
    return { ...state };
  default:
    return state;
  }
}
