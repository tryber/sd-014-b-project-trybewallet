// Esse reducer será responsável por tratar as informações da pessoa usuária

const INICIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case 'genericAction':
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default userReducer;
