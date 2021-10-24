// Esse reducer será responsável por tratar as informações da pessoa usuária
import { TEST_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TEST_EMAIL:
    return {
      ...state,
      email: action.user.email,
    };
  default:
    return state;
  }
};

export default user;
