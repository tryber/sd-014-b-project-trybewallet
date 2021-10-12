// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default userReducer;
