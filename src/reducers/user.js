import { LOGIN } from '../actions/userActions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default userReducer;
