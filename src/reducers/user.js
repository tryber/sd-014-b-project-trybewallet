import { SET_USER_EMAIL, SET_USER_PASSWORD } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_EMAIL:
    return { ...state, user: { email: action.payload, password: state.user.password } };
  case SET_USER_PASSWORD:
    return { ...state, user: { email: state.user.email, password: action.payload } };
  default:
    return state;
  }
};

export default userReducer;
