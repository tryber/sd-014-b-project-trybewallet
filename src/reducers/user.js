import { SEND_USER_INFO } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_USER_INFO:
    return {
      ...state, email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
