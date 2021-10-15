// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  user: {
    email: '',
  },
};

const INITIAL_WALLET_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export function user(state = INITIAL_USER_STATE, action) {
  switch (action.type) {
  case 'userLogin':
    return { ...state, email: 'a' };
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
