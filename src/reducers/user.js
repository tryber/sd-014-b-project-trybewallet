import { FORM_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FORM_LOGIN:
    return action.payload;
  default:
    return state;
  }
};

export default user;
