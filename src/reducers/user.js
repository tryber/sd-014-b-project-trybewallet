import { USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };

  default:
    return state;
  }
};

export default userReducer;
