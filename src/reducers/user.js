import { USER_DATA } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_USER_STATE = {
  email: '',
};

export default function user(state = INITIAL_USER_STATE, action) {
  switch (action.type) {
  case USER_DATA:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}
