// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.userinfo.email,
      password: action.userinfo.password,
    };
  default:
    return state;
  }
}

export default user;
