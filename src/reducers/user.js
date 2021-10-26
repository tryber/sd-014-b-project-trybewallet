// Esse reducer será responsável por tratar as informações da pessoa usuária

import { UserEmailPassword } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UserEmailPassword:
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
