import { SEND_EMAIL_ADDRESS } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userInformation(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_EMAIL_ADDRESS:
    return ({ ...state, email: action.emailAddress });
  default:
    return state;
  }
}

export default userInformation;
