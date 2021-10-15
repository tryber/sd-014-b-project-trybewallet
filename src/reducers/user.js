import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.userEmail,
      password: action.payload.userPassword,
    };
  default:
    return state;
  }
}

export default userReducer;
