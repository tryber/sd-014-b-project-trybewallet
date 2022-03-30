// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_USER_VALUE } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER_VALUE:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
