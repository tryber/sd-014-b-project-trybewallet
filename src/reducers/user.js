import { USER_SET_INFO } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_SET_INFO:
    return ({
      ...state,
      email: action.object.email,
    });
  default:
    return state;
  }
};

export default user;
