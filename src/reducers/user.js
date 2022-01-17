// Esse reducer será responsável por tratar as informações da pessoa usuária

import { EMAIL_AND_PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_AND_PASSWORD:
    return {
      email: action.email,
      password: action.password,
    };
  default:
    return state;
  }
}

export default user;
