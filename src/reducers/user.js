import { SEND_ACESS } from '../actions';

const INITIAL_STATE = {
  email: '',
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_ACESS:
    return {
      email: action.email,
    };
  default:
    return state;
  }
};

export default userReducer;
