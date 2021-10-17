import {
  SET_USER_EMAIL_VALUE,
  SET_USER_PASSWORD_VALUE,
} from '../actions';

const initialState = {
  user: {
    email: '',
    password: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER_EMAIL_VALUE:
    return { ...state, user: { email: action.payload } };
  case SET_USER_PASSWORD_VALUE:
    return { ...state, user: { password: action.payload } };
  default:
    return state;
  }
};

export default userReducer;
