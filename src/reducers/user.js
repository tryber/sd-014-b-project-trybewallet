import { REQUEST_LOGIN } from '../actions';

const INNITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_LOGIN:
    return { ...state, user: action.login };
  default:
    return state;
  }
};

export default user;
