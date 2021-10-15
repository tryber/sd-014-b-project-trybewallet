// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SAVE_USER_DATA } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER_DATA:
    return {
      ...state,
      email: action.email,
      password: action.password,
    };
  default:
    return state;
  }
}

export default user;
