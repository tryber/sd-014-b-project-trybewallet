import { SET_LOGIN_VALUE } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SET_LOGIN_VALUE:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
