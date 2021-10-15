// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  email: '',
};

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
};

export function user(state = INITIAL_USER_STATE, action) {
  switch (action.type) {
  case 'userLogin':
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export function wallet(state = INITIAL_WALLET_STATE, action) {
  switch (action.type) {
  case 'wallet':
    return { ...state };
  default:
    return state;
  }
}
