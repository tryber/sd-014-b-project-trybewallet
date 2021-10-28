import { EMAIL_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default user;
