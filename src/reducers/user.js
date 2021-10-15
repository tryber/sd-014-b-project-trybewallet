import { LOGIN_SUCESS } from '../actions';

const INITIAL_STATE = {
  email: '',
  passwordLength: 0,
};

const reducerLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SUCESS:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
};

export default reducerLogin;
