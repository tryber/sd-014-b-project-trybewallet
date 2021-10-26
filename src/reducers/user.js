import { SET_USER_EMAIL, SET_USER_PASSWORD } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_EMAIL:
    return { ...state, email: action.payload, password: state.password };
  case SET_USER_PASSWORD:
    return { ...state, email: state.email, password: action.payload };
  default:
    return state;
  }
};

export default user;
