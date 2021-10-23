import { LOGIN_USER } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      email: action.payload,
    };

  default:
    return state;
  }
};

export default user;

/* {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: []
  }
} */
