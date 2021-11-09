import { USER_EMAIL_ACTIONS } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL_ACTIONS:
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
