import { LOGIN_ACTION } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const loginUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_ACTION:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
};

export default loginUserReducer;
