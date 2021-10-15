import { SAVE_USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER:
    return { ...state, user: { email: action.value } };
  default:
    return { ...state };
  }
};

export default user;
