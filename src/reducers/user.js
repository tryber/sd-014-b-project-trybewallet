// Esse reducer será responsável por tratar as informações da pessoa usuária
import { TEST_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TEST_EMAIL:
    return {
      ...state,
      user: action.user,
    };
  default:
    return state;
  }
};

export default user;
