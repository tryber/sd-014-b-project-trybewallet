// Esse reducer será responsável por tratar as informações da pessoa usuária
const INISTIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INISTIAL_STATE, action) => {
  switch (action.type) {
  case 'EMAIL':
    return {
      ...state,
      email: action.user.email,
    };
  default:
    return state;
  }
};

export default user;
