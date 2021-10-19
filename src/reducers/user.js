import { SAVE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER:
    return { email: action.payload };
  default:
    return { ...state };
  }
};

export default user;
