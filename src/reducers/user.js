import { LOGIN_OK } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_OK:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
