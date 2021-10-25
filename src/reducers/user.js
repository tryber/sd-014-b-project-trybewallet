import { GET_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOGIN:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
